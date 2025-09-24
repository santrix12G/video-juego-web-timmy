import Phaser from 'phaser';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';


export default class EscenarioPerchera extends Phaser.Scene {

    rexUI: UIPlugin;
    public textBolsa: string;

    constructor() {
        super('EscenarioPerchera');
    }


    preload() {
        this.load.image('fondo', '/assets/fondo_escenario2.jpg');
        this.load.image('perchera', '/assets/perchera.png');
        this.load.image('bolsa', '/assets/bolsa.png');
    }

    create() {


        //cuadro de texto
        // defenir el fondo
        this.add.image(400, 300, 'fondo').setOrigin(0.5, 0.1);
        const bg = this.add.image(0, 0, 'fondo').setOrigin(0);
        
        const w = this.sys.game.config.width as number;
        const h = this.sys.game.config.height as number;
        
        const scaleX = w / bg.width;
        const scaleY = h / bg.height;
        const scale = Math.max(scaleX, scaleY);

        // Centrar
        bg.setScale(scale).setScrollFactor(0).setOrigin(0.5);
        bg.x = w / 2;
        bg.y = (h / 2) - 60;

        //definicion de percheras
        let perchera = this.add.image(400, 150, 'perchera');
        perchera.setScale(0.25);
        
        
        
        ///
        // --- Asegúrate en preload() de tener:
        // this.load.image('bolsa', 'assets/bolsa.png');
        
        // Crear container en la posición deseada (coordenada del mundo)
        let bolsaConNumero = this.add.container(255, 123);
        let bolsaConNumero2 = this.add.container(402, 123);
        let bolsaConNumero3 = this.add.container(100, 410);
        
        // Crear la imagen **en el origen del contenedor** (0,0)
        let bolsaSprite = this.add.image(0, 0, 'bolsa').setOrigin(0.5);
        let bolsaSprite2 = this.add.image(0, 0, 'bolsa').setOrigin(0.5);
        let bolsaSprite3 = this.add.image(0, 0, 'bolsa').setOrigin(0.5);
        
        // Ajusta la escala a un valor visible (prueba 0.25, 0.4, etc.)
        bolsaSprite.setScale(0.1);
        bolsaSprite2.setScale(0.1);
        bolsaSprite3.setScale(0.1);

        // Calcula un tamaño de fuente proporcional al ancho de la bolsa
        let fontSize = Math.max(12, Math.round(bolsaSprite.displayWidth * 0.45));
        
        // Crea el texto (sin fondo) y céntralo
        let textoBolsa1 = this.add.text(0, 40, '30kg', {
            fontFamily: 'Arial',
            fontSize: `20px`,
            color: '#000000',
            fontStyle: 'bold',
            // backgroundColor: '#ffffff77' // <-- opcional: NO usar si tapa la bolsa
        }).setOrigin(0.5);
        
        let textoBolsa2 = this.add.text(0, 40, '10kg', {
            fontFamily: 'Arial',
            fontSize: `20px`,
            color: '#000000',
            fontStyle: 'bold',
            // backgroundColor: '#ffffff77' // <-- opcional: NO usar si tapa la bolsa
        }).setOrigin(0.5);
        
        let textoBolsa3 = this.add.text(0, 40, "", {
            fontFamily: 'Arial',
            fontSize: `20px`,
            color: '#000000',
            fontStyle: 'bold',
            // backgroundColor: '#ffffff77' // <-- opcional: NO usar si tapa la bolsa
        }).setOrigin(0.5);
        // Agrega los hijos al contenedor en el orden correcto (sprite primero, texto encima)
        bolsaConNumero.add([bolsaSprite, textoBolsa1]);
        bolsaConNumero2.add([bolsaSprite2, textoBolsa2]);
        bolsaConNumero3.add([bolsaSprite3, textoBolsa3]);
        

        
        let ancho = bolsaSprite.displayWidth;
        let alto = bolsaSprite.displayHeight;

        // Rectángulo centrado en (0,0) del contenedor
        let zonaInteractiva = new Phaser.Geom.Rectangle(
            -(ancho / 2) + 180,   // desplazar mitad hacia la izquierda
            -(alto / 2) + 150,    // desplazar mitad hacia arriba
            (ancho / 2),
            (alto / 2) + 50
        );

        bolsaConNumero3.setInteractive(zonaInteractiva, Phaser.Geom.Rectangle.Contains);

        // Opcional: para hacer que el contenedor sea interactivo/arrastrable:
        bolsaConNumero3.setSize(bolsaSprite.displayWidth, bolsaSprite.displayHeight);
        bolsaConNumero3.setInteractive(new Phaser.Geom.Rectangle(
            -bolsaSprite.displayWidth / 2,
            -bolsaSprite.displayHeight / 2,
            bolsaSprite.displayWidth,
            bolsaSprite.displayHeight
        ), Phaser.Geom.Rectangle.Contains);

        this.input.setDraggable(bolsaConNumero3);
        
        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
            bolsaSprite3.setTint(0x00ff00);
        });
        
        this.input.on("dragend", (pointer, gameObject, dropped) => {
            if (!dropped) {
                bolsaSprite3.clearTint();
                // Si NO se soltó en la zona, vuelve a su lugar inicial
                // obj.x = startX;
                // obj.y = startY;
            }
        });
        
        // Primero calcula un área base según la bolsa



        this.cuadroTextoPregunta(textoBolsa3);
        this.input.enableDebug(bolsaConNumero3, 0xff0000);

    }

    hacerBolsaSeleccionable(llave) {
        llave.on("pointerdown", () => {
            // console.log("¡Llave inglesa seleccionada!");
            llave.setTint(0x00ff00); // ejemplo: cambia de color al seleccionarla
        });
        llave.on("pointerup", () => {
            llave.clearTint(); // vuelve a su color normal al soltarla
        });

        this.input.setDraggable(llave);


        //Posicion inicial
        const startX = 250;
        const startY = 500;
        this.input.on("drag", (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
        });
        this.input.on("dragend", (pointer, obj, dropped) => {
            if (!dropped) {
                // Si NO se soltó en la zona, vuelve a su lugar inicial
                // obj.x = startX;
                // obj.y = startY;
                obj.clearTint();
            }
        });

    }

    cuadroTextoPregunta(textBolsa) {

        

        //cierra todo los clicks hasta que se resuelva el cuadro de dialogo
        let blocker = this.add.rectangle(0, 0, Number(this.sys.game.config.width), Number(this.sys.game.config.height), 0x000000, 0.5)
            .setOrigin(0)
            .setInteractive();
        // Crear cuadro de diálogo
        // Crear cuadro de diálogo
        // Crear cuadro de diálogo
        var dialog = this.rexUI.add.dialog({
            x: 400,
            y: 350,
            width: 500,

            background: this.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x000000).setStrokeStyle(2, 0x00ffff),

            title: this.rexUI.add.label({
                background: this.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x1e1e1e),
                text: this.add.text(0, 0, '👜 Cual debe ser masa de la bolsa si:', { fontSize: '20px', color: '#00ffff' }),
                space: { left: 15, right: 15, top: 10, bottom: 10 }
            }),

            content: this.add.text(0, 0,
                `La distancia del gancho 1 al gancho 2 es: 40cm\nLa distancia del gancho 2 al gancho 3 es 60cm\nY las masas respectivas de las 2 bolsas colgadas son de 30kg y 10kg`,
                { fontSize: '18px', color: '#ffff66' }
            ),

            description: this.rexUI.add.textBox({
                x: 0,
                y: 0,
                background: this.rexUI.add.roundRectangle(0, 0, 400, 50, 10, 0x222222).setStrokeStyle(2, 0x00ffff),
                text: this.add.text(0, 0, '', { fontSize: '22px', color: '#ffffff' }),
                space: { left: 10, right: 10, top: 10, bottom: 10 }
            })
                .setInteractive()
                .on('pointerdown', () => {
                    // Hacer que el input real de HTML aparezca
                    const desc = dialog.getElement('description') as any;
                    const descText = desc?.getElement('text');

                    if (!descText) return;

                    // Caret ("|")
                    let caret = this.add.text(descText.x, descText.y, "|", {
                        fontSize: '22px',
                        color: '#00ffff'
                    });

                    // Animación de parpadeo del cursor
                    this.time.addEvent({
                        delay: 500,
                        loop: true,
                        callback: () => caret.setVisible(!caret.visible)
                    });

                    // Captura de teclado
                    if (this.input.keyboard) {
                        this.input.keyboard.on('keydown', (event: KeyboardEvent) => {
                            if (event.key === "Backspace") {
                                descText.setText(descText.text.slice(0, -1));
                            } else if (event.key.length === 1) {
                                descText.setText(descText.text + event.key);
                            }

                            // Recolocar el caret al final del texto
                            caret.x = descText.x + descText.width + 2;
                        });
                    }


                }),

            actions: [
                this.rexUI.add.label({
                    background: this.rexUI.add.roundRectangle(0, 0, 80, 40, 10, 0x008800),
                    text: this.add.text(0, 0, 'Aceptar', { fontSize: '18px', color: '#ffffff' }),
                    space: { left: 10, right: 10, top: 10, bottom: 10 }
                }).setInteractive().on('pointerdown', () => {
                    const description = dialog.getElement('description') as any;
                    const textValue = description?.getElement ? description.getElement('text')?.text : '';
                    textBolsa.setText(textValue+ "kg");
                    blocker.destroy();
                    dialog.destroy();
                }),

                this.rexUI.add.label({
                    background: this.rexUI.add.roundRectangle(0, 0, 80, 40, 10, 0x888800),
                    text: this.add.text(0, 0, 'Pista', { fontSize: '18px', color: '#ffffff' }),
                    space: { left: 10, right: 10, top: 10, bottom: 10 }
                }).setInteractive().on('pointerdown', () => {
                    alert("Pista: Torque = Fuerza × Distancia 😉");
                })
            ],

            space: {
                title: 15,
                content: 15,
                description: 20,
                action: 15,
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        })
            .layout()
            .popUp(500);

    }




}
