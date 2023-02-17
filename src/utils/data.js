const data = {
    questions: [
        {
            level: 1,
            question: '¿Cuál es la capital de España?',
            answers: [
                {
                    id: 1,
                    answer: 'Madrid',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'Barcelona',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Valencia',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Sevilla',
                    correct: false
                }
            ]
        },
        {
            level: 1,
            question: '¿Cuál es la capital de Francia?',
            answers: [
                {
                    id: 1,
                    answer: 'Madrid',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Barcelona',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Valencia',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'París',
                    correct: true
                }
            ]
        },
        {   
            level: 1,
            question: '¿Cuál es la capital de Italia?',
            answers: [
                {
                    id: 1,
                    answer: 'Madrid',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Barcelona',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Roma',
                    correct: true
                },
                {
                    id: 4,
                    answer: 'Sevilla',
                    correct: false
                }
            ]
        },
        {
            level: 2,
            question: '¿Cuál es el lugar más frío de la tierra?',
            answers: [
                {
                    id: 1,
                    answer: 'La Antártida',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'Polonia',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Canadá',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Bogotá',
                    correct: false
                }]
        },
        {
            level: 2,
            question: '¿Cómo se llamaba la Reina del Reino Unido?',
            answers: [
                {
                    id: 1,
                    answer: 'La Reina Isabel II',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'La Reina Isabel I',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'La Reina Isabel III',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'La Reina Isabel IV',
                    correct: false
                }]
        },
        {
            level: 2,
            question: '¿En qué continente está Ecuador?',
            answers: [
                {
                    id: 1,
                    answer: 'Europa',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Latinoamérica',
                    correct: true
                },
                {
                    id: 3,
                    answer: 'África',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Asia',
                    correct: false
                }]
        },
        {
            level: 3,
            question: '¿Qué cantidad de huesos hay en el cuerpo humano?',
            answers: [
                {
                    id: 1,
                    answer: '205',
                    correct: false
                },
                {
                    id: 2,
                    answer: '209',
                    correct: false
                },
                {
                    id: 3,
                    answer: '306',
                    correct: false
                },
                {
                    id: 4,
                    answer: '206',
                    correct: true
                }]
        },
        {
            level: 3,
            question: '¿Cómo se denomina el resultado de la multiplicación?',
            answers: [
                {
                    id: 1,
                    answer: 'Suma',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Producto',
                    correct: true
                },
                {
                    id: 3,
                    answer: 'Residuo',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Resultado',
                    correct: false
                }]
        },
        {
            level: 3,
            question: '¿Cuál es el océano más grande?',
            answers: [
                {
                    id: 1,
                    answer: 'Océano Pacífico',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'Océano Atlántico',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Océano Índico',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Océano Antártico',
                    correct: false
                }]
        },
        {
            level: 4,
            question: '¿En qué año comenzó la II Guerra Mundial?',
            answers: [
                {
                    id: 1,
                    answer: '1939',
                    correct: true
                },
                {
                    id: 2,
                    answer: '1940',
                    correct: false
                },
                {
                    id: 3,
                    answer: '1943',
                    correct: false
                },
                {
                    id: 4,
                    answer: '1937',
                    correct: false
                }]
        },
        {
            level: 4,
            question: '¿Cuál es el país más poblado del mundo?',
            answers: [
                {
                    id: 1,
                    answer: 'Rusia',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'India',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Estados Unidos',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'China',
                    correct: true
                }]
        },
        {
            level: 4,
            question: '¿Cuál es el país más pequeño del mundo?',
            answers: [
                {
                    id: 1,
                    answer: 'Monaco',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Vaticano',
                    correct: true
                },
                {
                    id: 3,
                    answer: 'San Marino',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Malta',
                    correct: false
                }]
        },
        {
            level: 5,
            question: '¿Cuál es el río más largo del mundo?',
            answers: [
                {
                    id: 1,
                    answer: 'Río Amazonas',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'Río Nilo',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Río Yangtze',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Río Mississippi',
                    correct: false
                }]
        },
        {
            level: 5,
            question: 'Si 50 es el 100%, ¿cuánto es el 90%?',
            answers: [
                {
                    id: 1,
                    answer: '45,1',
                    correct: false
                },
                {
                    id: 2,
                    answer: '40.5',
                    correct: false
                },
                {
                    id: 3,
                    answer: '44,9',
                    correct: false
                },
                {
                    id: 4,
                    answer: '45',
                    correct: true
                }]
        },
        {
            level: 5,
            question: '¿En qué lugar del cuerpo se produce la insulina?',
            answers: [
                {
                    id: 1,
                    answer: 'Páncreas',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'Hígado',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Estómago',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Intestino',
                    correct: false
                }]
        },
        {
            level: 6,
            question: ' ¿Cuántas patas tiene la araña?',
            answers: [
                {
                    id: 1,
                    answer: '4',
                    correct: false
                },
                {
                    id: 2,
                    answer: '6',
                    correct: false
                },
                {
                    id: 3,
                    answer: '8',
                    correct: true
                },
                {
                    id: 4,
                    answer: '10',
                    correct: false
                }]
        },
        {
            level: 6,
            question: '¿Cómo se llama el animal más rápido del mundo?',
            answers: [
                {
                    id: 1,
                    answer: 'Pantera negra',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Guepardo',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Leopardo',
                    correct: true
                },
                {
                    id: 4,
                    answer: 'Tigre',
                    correct: false
                }]
        },
        {
            level: 6,
            question: ' ¿En qué país se encuentra el famoso monumento Taj Mahal?',
            answers: [
                {
                    id: 1,
                    answer: 'Irán',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Turquía',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Afganistán',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'India',
                    correct: true
                }]
        },
        {
            level: 7,
            question: '¿Quién va a la cárcel?',
            answers: [
                {
                    id: 1,
                    answer: 'El imputado',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'El asesino',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'El violador',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'El condenado',
                    correct: true
                }]
        },
        {
            level: 7,
            question: '¿Cuál fue el primer metal que empleó el hombre?',
            answers: [
                {
                    id: 1,
                    answer: 'El oro',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'El cobre',
                    correct: true
                },
                {
                    id: 3,
                    answer: 'El hierro',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'El aluminio',
                    correct: false
                }]
        },
        {
            level: 7,
            question: '¿Cuál es el primero de la lista de los números primos?',
            answers: [
                {
                    id: 1,
                    answer: '2',
                    correct: true
                },
                {
                    id: 2,
                    answer: '3',
                    correct: false
                },
                {
                    id: 3,
                    answer: '1',
                    correct: false
                },
                {
                    id: 4,
                    answer: '5',
                    correct: false
                }]
        },
        {
            level: 8,
            question: '¿Cuál es el único mamífero capaz de volar?',
            answers: [
                {
                    id: 1,
                    answer: 'La Gallina',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'El murciélago',
                    correct: true
                },
                {
                    id: 3,
                    answer: 'La Golondrina',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'La Mariposa',
                    correct: false
                }]
        },
        {
            level: 8,
            question: '¿Cuál es el libro sagrado del Islam?',
            answers: [
                {
                    id: 1,
                    answer: 'El Corán',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'La Biblia',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'El Talmud',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'El torán',
                    correct: false
                }]
        },
        {
            level: 8,
            question: '¿Qué grasas hacen tan saludable el aceite de oliva?',
            answers: [
                {
                    id: 1,
                    answer: 'Las grasas saturadas',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Las grasas poliinsaturadas',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Las grasas monoinsaturadas',
                    correct: true
                },
                {
                    id: 4,
                    answer: 'Las grasas trans',
                    correct: false
                }]
        },
        {
            level: 9,
            question: '¿Quién ganó el mundial de 2014?',
            answers: [
                {
                    id: 1,
                    answer: 'Alemania',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Italia',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Brasil',
                    correct: true
                },
                {
                    id: 4,
                    answer: 'Argentina',
                    correct: false
                }]
        },
        {
            level: 9,
            question: '¿Quién escribió “Hamlet”?',
            answers: [
                {
                    id: 1,
                    answer: 'Gabriel García Márquez',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'William Shakespeare',
                    correct: true
                },
                {
                    id: 3,
                    answer: 'Jorge Luis Borges',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Mario Vargas Llosa',
                    correct: false
                }]
        },
        {
            level: 9,
            question: '¿A qué país pertenece la ciudad de Varsovia?',
            answers: [
                {
                    id: 1,
                    answer: 'Polonia',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Rusia',
                    correct: true
                },
                {
                    id: 3,
                    answer: 'Ucrania',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Lituania',
                    correct: false
                }]
        },
        {
            level: 10,
            question: '¿De qué estado fue emperador Napoleón Bonaparte?',
            answers: [
                {
                    id: 1,
                    answer: 'De Francia',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'De Italia',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'De España',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'De Alemania',
                    correct: false
                }]
        },
        {
            level: 10,
            question: '¿Cómo se llama el proceso por el cual las plantas obtienen alimento?',
            answers: [
                {
                    id: 1,
                    answer: 'Fotossíntesis',
                    correct: false
                },
                {
                    id: 2,
                    answer: 'Fotosintesis',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Fotosíntesis',
                    correct: true
                },
                {
                    id: 4,
                    answer: 'Fotosintesís',
                    correct: false
                }]
        }, 
        {
            level: 10,
            question: 'El triángulo que tiene sus tres lados iguales ¿Cómo se llama?',
            answers: [
                {
                    id: 1,
                    answer: 'Equilátero',
                    correct: true
                },
                {
                    id: 2,
                    answer: 'Isósceles',
                    correct: false
                },
                {
                    id: 3,
                    answer: 'Escaleno',
                    correct: false
                },
                {
                    id: 4,
                    answer: 'Rectángulo',
                    correct: false
                }]
        }
    ]
}

export default data;