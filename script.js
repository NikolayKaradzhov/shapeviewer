const colors = ['red', 'green', 'blue'];
    const fileInput = document.getElementById('fileInput');

    document.querySelectorAll('.shape').forEach(shape => {
      shape.colorIndex = 0;

      // Ляв бутон – въртене
      shape.addEventListener('click', function () {
        this.classList.add('rotate');
        setTimeout(() => this.classList.remove('rotate'), 600);
      });

      // Десен бутон – избор на изображение
      shape.addEventListener('contextmenu', function (e) {
        e.preventDefault();

        const targetShape = this;

        fileInput.onchange = function () {
          const file = fileInput.files[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = function (event) {
            const imageUrl = event.target.result;

            if (targetShape.classList.contains('triangle')) {
              const oldImage = targetShape.querySelector('.triangle-image');
              if (oldImage) oldImage.remove();

              const imgDiv = document.createElement('div');
              imgDiv.classList.add('triangle-image');
              imgDiv.style.backgroundImage = `url('${imageUrl}')`;
              targetShape.appendChild(imgDiv);
            } else {
              targetShape.style.backgroundImage = `url('${imageUrl}')`;
            }
          };

          reader.readAsDataURL(file);
        };

        fileInput.click();
      });
    });

    // Превключване на темата
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-theme');
      body.classList.toggle('light-theme', !isDark);
      themeToggle.textContent = isDark ? 'Светла тема' : 'Тъмна тема';
    });