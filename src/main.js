document.addEventListener('DOMContentLoaded', function() {
            
    var imageContainers = document.querySelectorAll('.image-container');

   
    imageContainers.forEach(function(container) {
        
        var overlayTextWrapper = container.querySelector('.overlay-text-wrapper');
        var readMoreText = overlayTextWrapper.querySelector('.read-more');

        
        container.addEventListener('mouseenter', function() {
            
            readMoreText.classList.remove('hidden');
        });

        container.addEventListener('mouseleave', function() {
            
            readMoreText.classList.add('hidden');
        });
    });
});