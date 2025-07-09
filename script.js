
    const colors = ['red', 'green', 'blue'];

    document.querySelectorAll('.shape').forEach(shape => {
      shape.colorIndex = 0;

      // Десен бутон – смяна на цвят
      shape.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        this.colorIndex = (this.colorIndex + 1) % colors.length;
        const newColor = colors[this.colorIndex];

        if (this.classList.contains('triangle')) {
          this.style.borderBottomColor = newColor;
        } else {
          this.style.backgroundColor = newColor;
        }
      });

      // Ляв бутон – завъртане
      shape.addEventListener('click', function () {
        this.classList.add('rotate');
        setTimeout(() => this.classList.remove('rotate'), 600); // 0.6s съвпада с продължителността на анимацията
      });
    });