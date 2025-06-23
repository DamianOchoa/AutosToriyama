document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close-btn");

    const autoInfo = {
        jetta: {
            title: "Volkswagen Jetta SEL 2025",
            desc: `
                Motor y rendimiento
                • Tipo de motor: Turboalimentado 1.5 TSI de 4 cilindros
                • Potencia: 158 hp @ 5,000 rpm
                • Torque: 184 lb⋅ft @ 1,500–3,500 rpm
                • Transmisión: Automática tipo Tiptronic de 6 velocidades con modo manual
                • Tracción: Delantera (FWD)
                • Aceleración 0‑100 km/h: ~8.1 s
                • Velocidad máxima: ~215 km/h

                Chasis y manejo
                • Suspensión delantera: MacPherson independiente
                • Suspensión trasera: Eje torsional con muelles helicoidales
                • Dirección: Asistida eléctrica con ajuste de sensibilidad
                • Frenos: Discos ventilados delanteros y de tambor traseros, ABS, EBD

                Diseño y comodidad
                • Exterior: Líneas limpias y perfil dinámico, parrilla frontal cromada, faros LED con DRL
                • Rines: Aleación de 17″ bicolor
                • Techo: Solar panorámico eléctrico
                • Interior: Tapicería de piel sintética con costuras contrastantes, asientos delanteros calefactables y ajustables eléctricamente

                Tecnología y seguridad
                • Infotainment: Pantalla táctil de 10″ con App-Connect (Android Auto y CarPlay)
                • Sonido: Sistema BeatsAudio de 8 bocinas
                • Climatizador: Automático bizona
                • Seguridad: Seis bolsas de aire, Control de Crucero Adaptativo, Frenado Autónomo de Emergencia, Detector de Punto Ciego, Asistente de Mantenimiento de Carril

                Por qué es especial
                El Jetta SEL 2025 ofrece equilibrio ideal entre eficiencia, confort y tecnología de punta. Perfecto para quienes buscan un sedán moderno con desempeño ágil, equipamiento premium y máximos estándares de seguridad.
                `
        },
        rx7: {
            title: "Mazda RX-7 (FD, 1993–1995)",
            desc: `
                Motor y rendimiento
                • Tipo de motor: Wankel rotativo 13B‑REW Twin Turbo de 1.3 litros
                • Potencia: 255 hp @ 6,500 rpm
                • Torque: 217 lb⋅ft @ 4,500 rpm
                • Transmisión: Manual de 5 velocidades
                • Tracción: Trasera (RWD)
                • Aceleración 0‑100 km/h: ~5.4 s
                • Velocidad máxima: ~250 km/h

                Chasis y suspensión
                • Carrocería: Coupé ligero de fibra de vidrio y acero
                • Suspensión delantera: Independiente tipo MacPherson con barras estabilizadoras
                • Suspensión trasera: Multi‑link con muelles helicoidales
                • Frenos: Discos ventilados en las cuatro ruedas con ABS de serie

                Diseño y aerodinámica
                • Líneas esculpidas y agresivas, capó bajo y fascia delantera envolvente
                • Alerón trasero integrado y difusor para mayor carga aerodinámica
                • Toma de aire central en capó y tomas laterales sobre pasos de rueda

                Interior y equipamiento
                • Asientos deportivos envolventes en tela con refuerzos laterales
                • Volante de tres rayos forrado en piel
                • Panel de instrumentos con tacómetro grande y relojes auxiliares (temp. aceite, presión turbo)
                • Aire acondicionado, radio AM/FM y sistema de sonido premium opcional

                Por qué es especial
                El RX-7 FD es un ícono del tuning y la ingeniería japonesa. Su motor rotativo ofrece respuesta instantánea y una curva de potencia única, mientras que su peso contenido y afinación de chasis lo hacen adicto a curvas. Perfecto para entusiastas que buscan un deportivo ligero y exclusivo.
                `
        },
        challenger: {
            title: "Dodge Challenger SRT Hellcat (2021)",
            desc: `
                Motor y rendimiento
                • Tipo de motor: V8 sobrealimentado 6.2 Litros “Hellcat”  
                • Potencia: 717 hp @ 6,200 rpm  
                • Torque: 656 lb⋅ft @ 4,000 rpm  
                • Transmisión: Automática TorqueFlite de 8 velocidades con cambios manuales  
                • Tracción: Trasera (RWD)  
                • Aceleración 0‑100 km/h: ~3.6 s  
                • Velocidad máxima: ~320 km/h  

                Chasis y frenado
                • Suspensión delantera: Independiente McPherson con barra estabilizadora  
                • Suspensión trasera: Eje rígido con muelles helicoidales  
                • Dirección: Asistida eléctrica de relación variable  
                • Frenos: Discos Brembo delanteros y traseros de serie, ABS, EBD  

                Diseño y aerodinámica
                • Carrocería: Coupé musculoso con capó ventilado y toma de aire dual funcional  
                • Fascia delantera: Alerón integrado y splitter inferior  
                • Rines: Aleación de 20″ con neumáticos Pirelli P Zero  
                • Colores exclusivos: “TorRed”, “F8 Green”, “Octane Red”  

                Interior y equipamiento
                • Asientos: Deportivos en piel Nappa con costuras rojas y refuerzos laterales  
                • Volante: Forrado en piel con levas y logo SRT Hellcat  
                • Tablero: Pantalla TFT de 7″ con modos de conducción y telemetría  
                • Climatizador: Automático dual zone  
                • Infotainment: Uconnect 8.4″ con navegación, Apple CarPlay y Android Auto  

                Por qué es especial
                El Challenger SRT Hellcat combina el legado clásico del muscle car americano con tecnología moderna de alto rendimiento. Su V8 sobrealimentado genera un empuje brutal y un sonido inconfundible, mientras que su chasis y frenos preparados para pista aseguran control absoluto. Un icono de potencia y presencia en cada kilómetro.
                `
        },
        mustang: {
            title: "Ford Mustang Shelby GT500 (1967)",
            desc: `
                Motor y rendimiento
                • Tipo de motor: V8 “428 Cobra Jet” de 7.0 litros (428 ci)
                • Potencia: 355 hp @ 5,200 rpm (oficial), aunque muchas unidades reales rondan los 360 hp
                • Torque: 440 lb⋅ft @ 3,400 rpm
                • Transmisión: Manual de 4 velocidades (Toploader)
                • Tracción: Trasera (RWD)
                • Aceleración 0‑100 km/h: ~6.5 s
                • Velocidad máxima: ~210 km/h

                Chasis y frenado
                • Suspensión delantera: Independiente con brazos A y barras estabilizadoras
                • Suspensión trasera: Eje rígido con ballestas semielípticas
                • Frenos: Discos delanteros de serie, tambores traseros

                Diseño y exclusividad Shelby
                • Carrocería: Fastback de líneas agresivas, con franjas “Le Mans”
                • Tomas de aire: Frontales y laterales funcionales
                • Insignias: Emblemas cobra en parrilla, guardabarros y tapa de la guantera
                • Rines originales: 15″ de aleación cromada “Cragar”

                Interior y equipamiento
                • Asientos: Tipo cubo en vinil con respaldos moldeados
                • Panel de instrumentos: Analógico completo (rpm, aceite, temperatura, gasolina)
                • Volante: Tres rayos con logo Shelby
                • Opcionales frecuentes: A/C, vidrio trasero calefactable, radio AM original

                Por qué es especial
                Este GT500 no es solo un muscle car: es una pieza de la historia de Carroll Shelby. Su V8, chasis reforzado y estética inconfundible lo convierten en un ícono de colección.
                `
        },
        charger: {
            title: "Dodge Charger R/T Scat Pack (2020)",
            desc: `
                Motor y rendimiento
                • Tipo de motor: V8 HEMI 6.4 Litros  
                • Potencia: 485 hp @ 6,100 rpm  
                • Torque: 475 lb⋅ft @ 4,300 rpm  
                • Transmisión: Automática TorqueFlite de 8 velocidades con paletas de cambio  
                • Tracción: Trasera (RWD)  
                • Aceleración 0‑100 km/h: ~4.3 s  
                • Velocidad máxima: ~290 km/h  

                Chasis y frenado
                • Suspensión delantera: Independiente McPherson con barras estabilizadoras  
                • Suspensión trasera: Multi‑link con muelles helicoidales  
                • Dirección: Asistida eléctrica de relación variable  
                • Frenos: Brembo de alto rendimiento en las cuatro ruedas, ABS, EBD  

                Diseño y aerodinámica
                • Carrocería: Sedán musculoso con toma de aire en capó y splitter delantero  
                • Parrilla: Diseño “split crosshair” característico Dodge  
                • Rines: Aleación de 20″ en negro mate con neumáticos de perfil bajo  
                • Detalles: Calipers rojos y emblemas Scat Pack  

                Interior y equipamiento
                • Asientos: Tipo cubo en cuero/perforado con costuras contrastantes  
                • Volante: Forrado en piel con levas y control de modos de conducción  
                • Tablero: Pantalla TFT de 7″ + cluster digital de 8.4″ para info de rendimiento  
                • Infotainment: Uconnect 8.4″ con Apple CarPlay, Android Auto y audio Alpine opcional  

                Por qué es especial
                El Charger R/T Scat Pack ofrece la comodidad de un sedán con el alma de un muscle car. Su V8 HEMI brinda potencia explosiva, mientras que su chasis refinado y frenos Brembo le confieren estabilidad y control excepcionales.`  
                },
        ranger: {
            title: "Ford Ranger Lariat 4×4 (2022)",
            desc: `
                Motor y rendimiento
                • Tipo de motor: EcoBoost 2.3 Litros turbo de 4 cilindros  
                • Potencia: 270 hp @ 5,500 rpm  
                • Torque: 310 lb⋅ft @ 3,000 rpm  
                • Transmisión: Automática de 10 velocidades  
                • Tracción: 4×4 con caja de transferencia reductora (4H, 4L)  
                • Aceleración 0‑100 km/h: ~7.2 s  
                • Capacidad de arrastre: Hasta 3,500 kg  

                Chasis y suspensión
                • Suspensión delantera: Independiente McPherson  
                • Suspensión trasera: Eje rígido con ballestas y amortiguadores de gas  
                • Dirección: Asistida eléctrica EZ‑Link  
                • Frenos: Discos ventilados delanteros y traseros, ABS, EBD  

                Diseño y versatilidad
                • Carrocería: Cabina doble con cama de 5 pies óptima para carga  
                • Rines: Aleación de 18″ en gris oscuro  
                • Protección: Bumper delantero de acero, estribos laterales y caja con revestimiento rociado  
                • Ganchos de arrastre delanteros  

                Interior y equipamiento
                • Asientos: Cuero perforado con ajuste eléctrico y calefacción en delanteros  
                • Volante: Multifunción forrado en cuero con control crucero adaptativo  
                • Infotainment: SYNC 3 con pantalla táctil de 8″, Apple CarPlay y Android Auto  
                • Conectividad: 4 puertos USB, toma de corriente de 110 V en la caja  
                • Seguridad: 7 bolsas de aire, Frenado Autónomo de Emergencia, Detector de Punto Ciego, Asistente de Descenso  

                Por qué es especial
                La Ford Ranger Lariat 4×4 combina robustez y confort: lista para cualquier aventura off‑road o trabajo pesado, con el refinamiento de un interior premium y tecnología avanzada.
                `  
        },
    };

    document.querySelectorAll("figure[data-auto]").forEach(fig => {
        fig.addEventListener("click", () => {
            const key = fig.getAttribute("data-auto");
            if (autoInfo[key]) {
                modalTitle.textContent = autoInfo[key].title;
                modalDescription.textContent = autoInfo[key].desc;
                modal.style.display = "block";
            }
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    document.querySelectorAll('#menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });
});

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }, 2000);
});