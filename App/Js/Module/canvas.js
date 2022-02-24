export default function createCanvas() {
    const canvas = document.getElementById('canvas1');

    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.height = 900;
        canvas.width = document.documentElement.clientWidth;

        let adjustX = 15;
        let adjustY = 0;
        let particleArray = [];
        const colorFont = 'black';
        const mouse = {
            x: null,
            y: null,
            radius: 0,
        }

        canvas.addEventListener('mousemove', function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
            mouse.radius = 200;
        })

        canvas.addEventListener('mouseleave', function (event) {
            mouse.radius = 0;
        })
        canvas.addEventListener('touchmove', function (event) {
            let touch = event.touches[0];
            mouse.x = touch.clientX;
            mouse.y = touch.clientY;
            mouse.radius = 200;
        },false)

        ctx.font = "bold 3.5vw Saira";
        const textString = 'Align'; 
        ctx.fillText(textString,  0, 60);
        const textCoordinates = ctx.getImageData(0, 0, 300, 300);
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 5) + 10;
            }

            draw() {
                ctx.fillStyle = colorFont;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDistanceX = dx / distance;
                let forceDistanceY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDistanceX * force * this.density;
                let directionY = forceDistanceY * force * this.density;
                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 30;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 30;
                    }
                }
            }
        }

        function init() {
            particleArray = [];
            for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
                for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                        let positionX = x + adjustX;
                        let positionY = y + adjustY;
                        particleArray.push(new Particle(positionX * 10, positionY * 10))
                    }
                }
            }
        }

        init();
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].draw();
                particleArray[i].update();
            }
            requestAnimationFrame(animate)
        }

        animate();


        window.addEventListener("resize", updateCanvas);

        function updateCanvas() {

            const getWidth = document.documentElement.clientWidth
                || document.body.clientWidth;

            canvas.width = getWidth;

            const functionCheckWidth = (breakpoint, fontsize) => {
                if(breakpoint.matches) {
                    let adjustX = 1.5;
                    let adjustY = -20;
                    ctx.font = fontsize;
                    const textString = 'Align';
                    ctx.fillText(textString, 0, 0, 1800);
                    const textCoordinates = ctx.getImageData(0, 0, 300, 300);
                    class Particle {
                        constructor(x, y) {
                            this.x = x;
                            this.y = y;
                            this.size = 1;
                            this.baseX = this.x;
                            this.baseY = this.y;
                            this.density = (Math.random() * 5) + 10;
                        }
    
                        draw() {
                            ctx.beginPath();
                            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                            ctx.closePath();
                            ctx.fill();
                        }
    
                        update() {
                            let dx = mouse.x - this.x;
                            let dy = mouse.y - this.y;
                            let distance = Math.sqrt(dx * dx + dy * dy);
                            let forceDistanceX = dx / distance;
                            let forceDistanceY = dy / distance;
                            let maxDistance = mouse.radius;
                            let force = (maxDistance - distance) / maxDistance;
                            let directionX = forceDistanceX * force * this.density;
                            let directionY = forceDistanceY * force * this.density;
                            if (distance < mouse.radius) {
                                this.x -= directionX;
                                this.y -= directionY;
                            } else {
                                if (this.x !== this.baseX) {
                                    let dx = this.x - this.baseX;
                                    this.x -= dx / 30;
                                }
                                if (this.y !== this.baseY) {
                                    let dy = this.y - this.baseY;
                                    this.y -= dy / 30;
                                }
                            }
                        }
                    }
                    function init() {
                        particleArray = [];
                        for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
                            for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                                if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                                    let positionX = x + adjustX;
                                    let positionY = y + adjustY;
                                    particleArray.push(new Particle(positionX * 10, positionY * 10))
                                }
                            }
                        }
                    }
                    init();
                }else {
                    console.log('false')
                }
            }

            const tabletBreakPoint = window.matchMedia("screen and (max-width: 1024px)");
            functionCheckWidth(tabletBreakPoint,'bold 4vw Saira')


            if (getWidth > 1920) {

                canvas.width = 1920;
                canvas.height = 900;


                ctx.font = "bold 7.2rem Saira";
                const textString = 'Align';
                ctx.fillText(textString, 0, 60);
                const textCoordinates = ctx.getImageData(0, 0, 300, 300);

                class Particle {
                    constructor(x, y) {
                        this.x = x;
                        this.y = y;
                        this.size = 1;
                        this.baseX = this.x;
                        this.baseY = this.y;
                        this.density = (Math.random() * 5) + 10;
                    }

                    draw() {
                        ctx.fillStyle = colorFont;
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.closePath();
                        ctx.fill();
                    }

                    update() {
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        let forceDistanceX = dx / distance;
                        let forceDistanceY = dy / distance;
                        let maxDistance = mouse.radius;
                        let force = (maxDistance - distance) / maxDistance;
                        let directionX = forceDistanceX * force * this.density;
                        let directionY = forceDistanceY * force * this.density;
                        if (distance < mouse.radius) {
                            this.x -= directionX;
                            this.y -= directionY;
                        } else {
                            if (this.x !== this.baseX) {
                                let dx = this.x - this.baseX;
                                this.x -= dx / 30;
                            }
                            if (this.y !== this.baseY) {
                                let dy = this.y - this.baseY;
                                this.y -= dy / 30;
                            }
                        }
                    }
                }

                function init() {
                    particleArray = [];
                    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
                        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                                let positionX = x + adjustX;
                                let positionY = y + adjustY;
                                particleArray.push(new Particle(positionX * 10, positionY * 10))
                            }
                        }
                    }
                }

                init();

            }
        }

        updateCanvas();
    }


}
