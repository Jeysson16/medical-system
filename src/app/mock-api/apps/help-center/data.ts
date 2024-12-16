export const faqCategories = [
    {
        id: "28924eab-97cc-465a-ba21-f232bb95843f",
        slug: "preguntas-frecuentes",
        title: "Preguntas Frecuentes"
    },
    {
        id: "bea49ee0-26da-46ad-97be-116cd7ab416d",
        slug: "soporte",
        title: "Soporte"
    }
];
export const faqs = [
    // Preguntas Frecuentes
    {
        id: "4e7ce72f-863a-451f-9160-cbd4fbbc4c3d",
        categoryId: "28924eab-97cc-465a-ba21-f232bb95843f",
        question: "¿Qué es EndoCap?",
        answer: "EndoCap es una cápsula avanzada equipada con nanotecnología y recubierta por un polímero seguro para el consumo. Contiene una cámara que toma imágenes internas del tracto gastrointestinal, enviándolas a un servidor para su análisis y detección de anomalías."
    },
    {
        id: "05532574-c102-4228-89a8-55fff32ec6fc",
        categoryId: "28924eab-97cc-465a-ba21-f232bb95843f",
        question: "¿Cuánto tiempo toma obtener los primeros resultados?",
        answer: "Los resultados iniciales, correspondientes al análisis del esófago y el estómago, están disponibles en aproximadamente 10 minutos tras consumir la cápsula. Estos pueden ser revisados en tiempo real por el médico y el paciente."
    },
    {
        id: "5d877fc7-b881-4527-a6aa-d39d642feb23",
        categoryId: "28924eab-97cc-465a-ba21-f232bb95843f",
        question: "¿Puede el paciente visualizar los registros y resultados?",
        answer: "Sí, los resultados iniciales y finales son accesibles tanto para el médico como para el paciente. Esto permite una mayor transparencia en el diagnóstico y facilita la comprensión de los hallazgos por parte del paciente."
    },
    // Soporte
    {
        id: "2fffd148-7644-466d-8737-7dde88c54154",
        categoryId: "bea49ee0-26da-46ad-97be-116cd7ab416d",
        question: "¿Cómo se analizan las imágenes?",
        answer: "Las imágenes capturadas por la cápsula se envían a un endpoint seguro para ser analizadas por un sistema avanzado de reconocimiento de imágenes, detectando posibles anomalías y almacenándolas en una base de datos para la revisión del médico."
    },
    {
        id: "24a1034e-b4d6-4a86-a1ea-90516e87e810",
        categoryId: "bea49ee0-26da-46ad-97be-116cd7ab416d",
        question: "¿Qué sucede con las imágenes de los intestinos y áreas posteriores?",
        answer: "Mientras la cápsula avanza por el tracto digestivo, captura imágenes adicionales de los intestinos y otras áreas. Estas imágenes son procesadas en tiempo real y se almacenan para un análisis más detallado posterior. El médico indicará si se detectan anomalías en ubicaciones específicas."
    },
    {
        id: "7ac32f89-6fb6-4c93-bc18-7cf874bf2569",
        categoryId: "bea49ee0-26da-46ad-97be-116cd7ab416d",
        question: "¿El médico puede determinar con precisión la ubicación de las anomalías?",
        answer: "Sí, el sistema de análisis de EndoCap identifica la ubicación exacta de las posibles anomalías en el tracto digestivo. El médico utiliza esta información para evaluar la condición del paciente y determinar los pasos a seguir."
    }
];

export const guideCategories = [
    {
        id: "0ee72de7-49c0-4880-9e89-b72a4edd6a81",
        slug: "introduccion",
        title: "Introducción"
    },
    {
        id: "07b8421f-20bf-45b6-90ee-169ebe3a5bcc",
        slug: "uso-de-endocap",
        title: "Uso de EndoCap"
    }
];
export const guides = [
    // Introducción
    {
        id: "a008ffa3-7b3f-43be-8a8f-dbf5272ed2dd",
        categoryId: "0ee72de7-49c0-4880-9e89-b72a4edd6a81",
        slug: "que-es-endocap",
        title: "¿Qué es EndoCap?",
        subtitle: "Descubre cómo funciona y para qué se utiliza esta innovadora cápsula de diagnóstico."
    },
    {
        id: "7643d388-12ab-4025-a2f1-5045ac7b1c4c",
        categoryId: "0ee72de7-49c0-4880-9e89-b72a4edd6a81",
        slug: "beneficios-de-endocap",
        title: "Beneficios de EndoCap",
        subtitle: "Conoce las ventajas de usar esta tecnología no invasiva en el diagnóstico médico."
    },
    // Uso de EndoCap
    {
        id: "f2592886-11b8-4b56-baab-96802c2ed93e",
        categoryId: "07b8421f-20bf-45b6-90ee-169ebe3a5bcc",
        slug: "como-usar-endocap",
        title: "Cómo usar EndoCap",
        subtitle: "Guía paso a paso para consumir la cápsula y garantizar resultados efectivos."
    },
    {
        id: "9ec3f4b9-a355-4f57-9e93-efa8611cc1c9",
        categoryId: "07b8421f-20bf-45b6-90ee-169ebe3a5bcc",
        slug: "interpretacion-de-resultados",
        title: "Interpretación de resultados",
        subtitle: "Aprende cómo el sistema analiza las imágenes y genera un informe detallado."
    }
];

export const guideContent = `
<h2>EndoCap: Guía Rápida</h2>

<p>
    <strong>EndoCap</strong> es una herramienta innovadora para el diagnóstico médico. La cápsula toma imágenes internas del sistema digestivo y detecta posibles anomalías utilizando un sistema avanzado de reconocimiento de imágenes.
</p>

<h3>Resultados iniciales</h3>

<p>
    En los primeros 10 minutos, EndoCap genera imágenes del esófago y el estómago. Estos resultados están disponibles casi inmediatamente para que el médico y el paciente los revisen.
</p>

<h3>Análisis posteriores</h3>

<p>
    La cápsula continúa tomando imágenes mientras recorre los intestinos y otras partes del sistema digestivo. Las imágenes se procesan en tiempo real, almacenándose en un sistema seguro para análisis posterior. 
</p>

<h4>Ventajas</h4>

<ul>
    <li>No invasivo y seguro</li>
    <li>Diagnósticos más rápidos y precisos</li>
    <li>Posibilidad de localizar anomalías específicas</li>
</ul>

<h4>Interacción con el médico</h4>

<blockquote>
    <p>
        El médico revisa los resultados y determina si existen anomalías en localizaciones específicas, explicando los hallazgos al paciente de manera clara y concisa.
    </p>
    <footer>
        Equipo de desarrollo de EndoCap
    </footer>
</blockquote>

<h5>Resultados visibles para el paciente</h5>

<p>
    Los pacientes tienen acceso a los resultados iniciales y finales, lo que facilita la comprensión de su diagnóstico y tratamiento.
</p>
`;
