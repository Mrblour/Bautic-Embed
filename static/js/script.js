document.addEventListener('DOMContentLoaded', () => {
    const webhookUrlInput = document.getElementById('webhook_url');
    const authorNameInput = document.getElementById('author_name');
    const authorUrlInput = document.getElementById('author_url');
    const authorIconUrlInput = document.getElementById('author_icon_url');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const urlInput = document.getElementById('url');
    const colorInput = document.getElementById('color');
    const imageUrlInput = document.getElementById('image_url');
    const thumbnailUrlInput = document.getElementById('thumbnail_url');
    const footerTextInput = document.getElementById('footer_text');
    const footerIconUrlInput = document.getElementById('footer_icon_url');
    const timestampInput = document.getElementById('timestamp');

    const fieldsContainer = document.getElementById('fields_container');
    const addFieldBtn = document.getElementById('add_field_btn');

    const sendEmbedBtnTopNav = document.getElementById('send_embed_btn_top_nav');

    const messageDiv = document.getElementById('message');

    function showMessage(msg, type = 'success') {
        messageDiv.textContent = msg;
        messageDiv.className = '';
        messageDiv.classList.add('fade-in');
        if (type === 'success') {
            messageDiv.classList.add('message-success');
        } else {
            messageDiv.classList.add('message-error');
        }
        messageDiv.style.display = 'block';

        setTimeout(() => {
            messageDiv.classList.remove('fade-in');
            messageDiv.classList.add('fade-out');
            setTimeout(() => {
                messageDiv.style.display = 'none';
                messageDiv.classList.remove('fade-out');
            }, 500);
        }, 5000);
    }

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (e) {
            return false;
        }
    }

    function buildEmbedPayload() {
        const embeds = [];
        const embed = {};

        const authorName = authorNameInput.value.trim();
        const authorUrl = authorUrlInput.value.trim();
        const authorIconUrl = authorIconUrlInput.value.trim();

        if (authorName) {
            embed.author = { name: authorName };
            if (authorUrl && isValidUrl(authorUrl)) {
                embed.author.url = authorUrl;
            }
            if (authorIconUrl && isValidUrl(authorIconUrl)) {
                embed.author.icon_url = authorIconUrl;
            }
        }

        const title = titleInput.value.trim();
        if (title) {
            embed.title = title;
        }

        const description = descriptionInput.value.trim();
        if (description) {
            embed.description = description;
        }

        const url = urlInput.value.trim();
        if (url && isValidUrl(url)) {
            embed.url = url;
        }

        const color = colorInput.value.trim();
        if (color) {
            try {
                const hexColor = parseInt(color.replace(/^#/, ''), 16);
                if (!isNaN(hexColor)) {
                    embed.color = hexColor;
                }
            } catch (e) {

            }
        }

        const fields = [];
        document.querySelectorAll('.field-item').forEach(fieldDiv => {
            const nameInput = fieldDiv.querySelector('.field-name');
            const valueInput = fieldDiv.querySelector('.field-value');
            const inlineCheckbox = fieldDiv.querySelector('.field-inline');

            const name = nameInput ? nameInput.value.trim() : '';
            const value = valueInput ? valueInput.value.trim() : '';
            const inline = inlineCheckbox ? inlineCheckbox.checked : false;

            if (name && value) {
                fields.push({ name, value, inline });
            }
        });

        if (fields.length > 0) {
            embed.fields = fields;
        }

        const imageUrl = imageUrlInput.value.trim();
        if (imageUrl && isValidUrl(imageUrl)) {
            embed.image = { url: imageUrl };
        }

        const thumbnailUrl = thumbnailUrlInput.value.trim();
        if (thumbnailUrl && isValidUrl(thumbnailUrl)) {
            embed.thumbnail = { url: thumbnailUrl };
        }

        const footerText = footerTextInput.value.trim();
        const footerIconUrl = footerIconUrlInput.value.trim();
        if (footerText) {
            embed.footer = { text: footerText };
            if (footerIconUrl && isValidUrl(footerIconUrl)) {
                embed.footer.icon_url = footerIconUrl;
            }
        }

        const timestamp = timestampInput.value.trim();
        if (timestamp) {
            try {
                const date = new Date(timestamp);
                if (!isNaN(date.getTime())) {
                    embed.timestamp = date.toISOString();
                }
            } catch (e) {

            }
        }

        if (Object.keys(embed).length > 0) {
            embeds.push(embed);
        }

        return { embeds: embeds };
    }

    addFieldBtn.addEventListener('click', () => {
        const fieldCount = fieldsContainer.querySelectorAll('.field-item').length;
        const newFieldDiv = document.createElement('div');
        newFieldDiv.classList.add('field-item');
        newFieldDiv.innerHTML = `
            <label>Field Name:</label>
            <input type="text" class="field-name" placeholder="Name ${fieldCount + 1}" maxlength="256">
            <label>Field Value:</label>
            <textarea class="field-value" rows="2" placeholder="Value ${fieldCount + 1}" maxlength="1024"></textarea>
            <label>
                <input type="checkbox" class="field-inline"> Inline
            </label>
            <button type="button" class="remove-field">
                <i class="bi bi-x-circle"></i> Remove
            </button>
        `;
        fieldsContainer.appendChild(newFieldDiv);

        newFieldDiv.querySelector('.remove-field').addEventListener('click', () => {
            newFieldDiv.remove();
        });
    });

    async function handleSendEmbed() {
        const webhookUrl = webhookUrlInput.value.trim();
        if (!webhookUrl) {
            showMessage('Por favor, ingresa la URL del Webhook.', 'error');
            return;
        }

        const payload = buildEmbedPayload();

        if (!payload.embeds || payload.embeds.length === 0) {
            showMessage('No hay contenido de embed para enviar. Por favor, rellena al menos un campo del embed.', 'error');
            return;
        }

        try {
            const response = await fetch('/send_embed', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ webhook_url: webhookUrl, payload: payload }),
            });

            const result = await response.json();

            if (response.ok) {
                showMessage(result.message, 'success');
            } else {
                showMessage(`Error: ${result.message}`, 'error');
            }
        } catch (error) {
            showMessage(`Error de red: ${error.message}`, 'error');
        }
    }

    if (sendEmbedBtnTopNav) {
        sendEmbedBtnTopNav.addEventListener('click', handleSendEmbed);
    }
});