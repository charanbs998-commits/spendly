document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-iframe');

    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder video

    if (openModalBtn && modal && iframe) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            iframe.src = videoUrl;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    const closeModal = () => {
        if (modal && iframe) {
            modal.style.display = 'none';
            iframe.src = ''; // Stop video by clearing src
            document.body.style.overflow = '';
        }
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});