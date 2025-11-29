const toggles = document.querySelectorAll('.theme-toggle');

      toggles.forEach(icon => {
        icon.addEventListener('click', () => {
          // Toggle dark mode class on body
          document.body.classList.toggle('dark-mode');

          const dark = document.body.classList.contains('dark-mode');

          // Change all toggle icons to sun/moon to stay in sync
          toggles.forEach(i => {
            if (dark) {
              i.classList.remove('bi-moon');
              i.classList.add('bi-sun');
            } else {
              i.classList.remove('bi-sun');
              i.classList.add('bi-moon');
            }
          });
        });
      });