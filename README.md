# imageMagnifier (vanilla Js)

### [githubpage](https://soonya27.github.io/imageMagnifier/)



### HTML
```html
	const zoom1 = new ZoomImage(document.querySelector('.wrap'), 3);
	document.querySelector('.desc').innerHTML = `X${zoom1.magnification} 배율`;
```


### JS code
```javascript
class ZoomImage {
		#magnification;
		constructor(target, magnification) {
			this.target = target;
			this.image = this.target.querySelector('img');
			this.#magnification = magnification;

			this.#makeZoom();
			this.#init();
		}

		get magnification() {
			return this.#magnification;
		}

		#makeZoom() {
			const zoomDiv = document.createElement('div');
			this.zoom = zoomDiv;
			zoomDiv.classList.add('zoom');
			this.target.append(zoomDiv);

			const imgSrc = this.image.src;
			this.zoom.style.backgroundImage = `url(${imgSrc})`;
			this.zoom.style.backgroundSize = this.target.getBoundingClientRect().width * this.#magnification + 'px';
		}

		#init() {
			this.target.addEventListener('mousemove', (e) => {

				const targetRect = this.target.getBoundingClientRect();
				const xPosition = e.clientX - targetRect.x;
				const yPosition = e.clientY - targetRect.y;

				const mouseOut = xPosition < 0 || xPosition > targetRect.width || yPosition < 0 || yPosition > targetRect.height;
				this.zoom.style.display = 'block';
				if (mouseOut) {
					this.zoom.style.display = 'none';
					return;
				}

				const zomHalfWidth = this.zoom.offsetWidth / 2;
				const zoomPositionX = (xPosition - zomHalfWidth) / targetRect.width * 100;
				const zoomPositionY = (yPosition - zomHalfWidth) / targetRect.height * 100;
				const bgPositionX = -(xPosition * this.#magnification - zomHalfWidth);
				const bgPositionY = -(yPosition * this.#magnification - zomHalfWidth);

				this.zoom.style.left = `${zoomPositionX}%`;
				this.zoom.style.top = `${zoomPositionY}%`;
				this.zoom.style.backgroundPosition = `${bgPositionX}px ${bgPositionY}px`;
			});
		}

	}
```
