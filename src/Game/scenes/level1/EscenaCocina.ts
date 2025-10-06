import Phaser from 'phaser';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

function createRoundedTexture(scene: Phaser.Scene, key: string, w: number, h: number, radius: number, fillColor = 0x1e1e2f, strokeColor = 0x00ffcc, strokeWidth = 4) {
    const gfx = scene.make.graphics({ x: 0, y: 0 });
    gfx.fillStyle(fillColor, 1);
    gfx.fillRoundedRect(0, 0, w, h, radius);
    if (strokeWidth > 0) {
        gfx.lineStyle(strokeWidth, strokeColor, 1);
        gfx.strokeRoundedRect(0, 0, w, h, radius);
    }
    gfx.generateTexture(key, w, h); // "hornea" la forma en una textura
    gfx.destroy();
}

export default class EscenaCocina extends Phaser.Scene {

    rexUI: UIPlugin;

    constructor() {
        super('EscenaCocina');
    }


    preload() {
        // Cargar imágenes desde public/assets
        this.load.image('fondo', '/assets/tuberiaCocina.jpg');
        this.load.image('wrench', '/assets/llaveInglesa.png');
        this.load.image('pliers', '/assets/pliers.png');
        this.load.spritesheet("aguaCayendo", "assets/aguacayendo.png", {
            frameWidth: 580,   // ancho de cada frame
            frameHeight: 2200   // alto de cada frame
        });

        //Cargar audios
        this.load.audio('agua-cayendo', '/assets/agua_cayendo.flac');
    }

    create() {
        this.scene.launch('EscenarioPerchera');
        this.scene.bringToTop('EscenaCocina');
        // Fondo centrado
        this.add.image(400, 300, 'fondo').setOrigin(0.5, 0.5);
        const bg = this.add.image(0, 0, 'fondo').setOrigin(0);

        const w = this.sys.game.config.width as number;
        const h = this.sys.game.config.height as number;

        const scaleX = w / bg.width;
        const scaleY = h / bg.height;
        const scale = Math.max(scaleX, scaleY);

        bg.setScale(scale).setScrollFactor(0).setOrigin(0.5);

        // Centrar
        bg.x = w / 2;
        bg.y = h / 2;

        //sonidos
        let agua_cayedo = this.sound.add('agua-cayendo', { loop: true, volume: 0.5 }).play();



        // Chorro de agua (animado usando sprites)
        this.anims.create({
            key: "aguaAnim",
            frames: this.anims.generateFrameNumbers("aguaCayendo", { start: 0, end: 3 }),
            frameRate: 7,   // velocidad (frames por segundo)
            repeat: -1       // -1 = loop infinito
        });

        const agua = this.add.sprite(397, 300, "aguaCayendo");
        agua.setOrigin(0.5, 0);     // anclar arriba al centro
        agua.setDisplaySize(50, 200); // tamaño
        agua.play("aguaAnim");

        // Herramientas (simplemente colocadas en la parte inferior)
        let llaveInglesa = this.add.image(250, 500, 'wrench');
        let zonaInteractiva = new Phaser.Geom.Rectangle(
            10,
            20,
            1100,
            1100
        );

        llaveInglesa.setInteractive(zonaInteractiva, Phaser.Geom.Rectangle.Contains);
        llaveInglesa.setScale(0.05);
        llaveInglesa.setInteractive();
        this.agarrarLlaveInglesa(llaveInglesa);
        this.input.enableDebug(llaveInglesa, 0xff0000);
        // this.add.image(400, 500, 'pliers').setScale(0.7);

        // Texto de ayuda temporal
        this.add.text(200, 50, 'Escenario 1: Tubería rota', {
            fontSize: '24px',
            color: '#ffffff'
        });

        //Cuadro de dialogo


        // Campo de entrada de texto




    }

    agarrarLlaveInglesa(llave) {
        llave.on("pointerdown", () => {
            // console.log("¡Llave inglesa seleccionada!");
            llave.setTint(0x00ff00); // ejemplo: cambia de color al seleccionarla
        });
        llave.on("pointerup", () => {
            llave.clearTint(); // vuelve a su color normal al soltarla
        });

        this.input.setDraggable(llave);


        //Posicion inicial si no se alcanza la zona indicada
        const startX = 250;
        const startY = 500;
        this.input.on("drag", (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
        });
        this.input.on("dragend", (pointer, obj, dropped) => {
            if (!dropped) {
                // Si NO se soltó en la zona, vuelve a su lugar inicial
                obj.x = startX;
                obj.y = startY;
                obj.clearTint();
            }
        });


        //zona objetivo
        let zonaLlave = this.add.zone(400, 320, 60, 60).setRectangleDropZone(50, 50);

        // this.physics.add.existing(zonaLlave, true); // true = objeto estático
        // this.physics.add.existing(llave);

        this.input.enableDebug(zonaLlave, 0x00ff00);
        this.input.enableDebug(llave, 0xff0000);

        // //overlap de la llave con la zona de la llave
        // this.physics.add.overlap(llave, zonaLlave, () => {
        //     console.log("✅ Llave colocada correctamente en la tubería");
        //     llave.setTint(0xff0000);
        //     llave.disableInteractive();
        //     this.cuadroTextoPregunta();
        // });



        // //agregar debug con la llave:
        // if (llave.input && llave.input.hitArea) {
        //     graphics.strokeRect(
        //         llave.x - llave.input.hitArea.width / 2,
        //         llave.y - llave.input.hitArea.height / 2,
        //         llave.input.hitArea.width,
        //         llave.input.hitArea.height
        //     );
        // }


        // this.input.on("drop", (pointer, obj, dropZone) => {
        //     if (obj === llave && dropZone === zonaLlave) {
        //         console.log("✅ Llave colocada correctamente en la tubería");

        //         // Ejemplo de evento: quitar color y bloquear movimiento
        //         llave.setTint(0xff0000)
        //         llave.disableInteractive();
        //         this.cuadroTextoPregunta();
        //         // Aquí podrías detener el agua
        //         // agua.setVisible(false);

        //         console.log(zonaLlave);
        //         console.log(llave);
        //     }
        // });

        //otra forma de hacer el drop
        this.input.on("dragend", (pointer, obj) => {
            if (obj === llave) {
                const boundsLlave = llave.getBounds();
                const boundsZona = zonaLlave.getBounds();

                if (Phaser.Geom.Intersects.RectangleToRectangle(boundsLlave, boundsZona)) {
                    console.log("✅ Llave colocada correctamente en la tubería");
                    llave.setTint(0xff0000);
                    //llave.disableInteractive();
                    this.cuadroTextoPregunta(llave);
                }
            }
        });

    }

    cuadroTextoPregunta(llave) {

        // Crear cuadro de diálogo
        // Crear cuadro de diálogo
        // Crear cuadro de diálogo
        var dialog = this.rexUI.add.dialog({
            x: 400,
            y: 250,
            width: 500,

            background: this.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x000000).setStrokeStyle(2, 0x00ffff),

            title: this.rexUI.add.label({
                background: this.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x1e1e1e),
                text: this.add.text(0, 0, '🔧 Reparar tubería', { fontSize: '20px', color: '#00ffff' }),
                space: { left: 15, right: 15, top: 10, bottom: 10 }
            }),

            content: this.add.text(0, 0,
                'Se requiere un torque de 20 N·m.\nLongitud de la llave: 0.5 m.\n¿Cuánta fuerza aplicar?',
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

                    const respuestaCorrecta = "40";

                    let msg = (textValue === respuestaCorrecta) ? "✅ Respuesta correcta" : "❌ Respuesta incorrecta";

                    // Mostrar texto temporal en pantalla
                    const feedback = this.add.text(400, 500, msg, {
                        fontSize: "28px",
                        color: (textValue === respuestaCorrecta) ? "#00ff00" : "#ff0000",
                        fontStyle: "bold"
                    }).setOrigin(0.5);

                    // Desaparece después de 2 segundos
                    this.time.delayedCall(2000, () => {
                        feedback.destroy();
                    });
                }),

                this.rexUI.add.label({
                    background: this.rexUI.add.roundRectangle(0, 0, 80, 40, 10, 0x888800),
                    text: this.add.text(0, 0, 'Pista', { fontSize: '18px', color: '#ffffff' }),
                    space: { left: 10, right: 10, top: 10, bottom: 10 }
                }).setInteractive().on('pointerdown', () => {
                    alert("Pista: Torque = Fuerza × Distancia 😉");
                }),
                this.rexUI.add.label(
                    {
                        background: this.rexUI.add.roundRectangle(0, 0, 40, 30, 10, 0xff0000),
                        text: this.add.text(0, 0, 'X', { fontSize: '18px', color: '#000000' }),
                        space: { left: 10, right: 10, top: 10, bottom: 10 }
                    }
                ).setInteractive().on('pointerdown', () => {
                    dialog.destroy();
                    this.posicionInicialLlave(llave);
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

    posicionInicialLlave(llave) {
        llave.setInteractive();
        llave.clearTint();
        this.input.setDraggable(llave);
        const startX = 250;
        const startY = 500;
        llave.x = startX;
        llave.y = startY;
    }
}
