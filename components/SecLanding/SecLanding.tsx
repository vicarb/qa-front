'use client'
import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

interface Item {
    id: string;
    question: string;
    answer: string;
    category: string | null;
  }
const data = [
  {
    id: "64a4fd7df053d710fb6d067a",
    question: "¿Cuál es la diferencia entre un desarrollador Full Stack y un desarrollador especializado en Front-End o Back-End?",
    answer: "Un desarrollador Full Stack tiene conocimientos tanto en Front-End como en Back-End, y puede trabajar en todas las capas de una aplicación. Un desarrollador especializado en Front-End se enfoca en la interfaz de usuario, mientras que uno especializado en Back-End se enfoca en la lógica del servidor y la gestión de datos.",
    category: "Desarrollo web"
  },
  {
    id: "64a50596c5eaad4441e30ddb",
    question: "¿Qué es Java y qué características lo distinguen de otros lenguajes de programación?",
    answer: "Java es un lenguaje de programación orientado a objetos que se destaca por su portabilidad, ya que puede ejecutarse en diferentes plataformas sin necesidad de recompilación. También se caracteriza por su enfoque en la seguridad, la robustez y la facilidad de uso.",
    category: "Java"
  },
  {
    id: "64a505b6c5eaad4441e30ddc",
    question: "¿Cuál es la diferencia entre una clase y un objeto en Java?",
    answer: "En Java, una clase es una plantilla o un modelo que define la estructura y el comportamiento de los objetos. Un objeto, por otro lado, es una instancia concreta de una clase. En pocas palabras, una clase es la descripción y un objeto es la instancia real en la memoria.",
    category: "Java"
  },
  {
    id: "64a5062ac5eaad4441e30ddd",
    question: "¿Qué es Spring Boot y cuáles son sus principales características?",
    answer: "Spring Boot es un marco de trabajo de desarrollo de aplicaciones en Java que se basa en el framework Spring. Sus principales características incluyen la configuración automática, que simplifica la configuración del proyecto, y el inicio rápido, que permite crear aplicaciones listas para usar con poca configuración.",
    category: "Java"
  },
  {
    id: "64a50648c5eaad4441e30dde",
    question: "¿Qué es la inyección de dependencias y cómo se implementa en Spring Boot?",
    answer: "La inyección de dependencias es un patrón de diseño en el que los objetos se proporcionan a una clase en lugar de que la clase los cree internamente. En Spring Boot, la inyección de dependencias se implementa mediante el uso de anotaciones, como @Autowired, para indicar dónde se deben inyectar las dependencias en una clase.",
    category: "Java"
  },
  {
    id: "64a5069bc5eaad4441e30ddf",
    question: "¿Cuál es la diferencia entre @Component, @Service, @Repository y @Controller en Spring Boot?",
    answer: "Estas son anotaciones especiales en Spring Boot que se utilizan para marcar las clases y habilitar ciertas funcionalidades. @Component es una anotación genérica para cualquier componente de Spring. @Service se utiliza para marcar los servicios de negocio. @Repository se utiliza para marcar los componentes de acceso a datos, como los repositorios de bases de datos. @Controller se utiliza para marcar los controladores de la capa de presentación.",
    category: "Java"
  },
  {
    id: "64a509eec5eaad4441e30de0",
    question: "¿Qué es la programación orientada a objetos?",
    answer: "La programación orientada a objetos (POO) es un paradigma de programación que se basa en la idea de modelar el mundo real como objetos que interactúan entre sí. En la POO, los objetos son entidades que encapsulan datos y comportamientos relacionados. Los objetos se crean a partir de clases, que son plantillas que definen las características y acciones que los objetos pueden tener. La POO se centra en conceptos como la encapsulación, la herencia y el polimorfismo, lo que permite organizar el código de manera más estructurada, modular y reutilizable.",
    category: "Java"
  },
  {
    id: "64a50a17c5eaad4441e30de1",
    question: "¿Qué es la encapsulación en programación orientada a objetos?",
    answer: "La encapsulación es un concepto fundamental en la programación orientada a objetos (POO) que consiste en agrupar datos y los métodos que operan sobre esos datos en una única entidad llamada objeto. La encapsulación proporciona ocultamiento de la información al restringir el acceso directo a los datos internos de un objeto y permitir el acceso solo a través de métodos específicos, conocidos como métodos de acceso o getters y setters. Esto garantiza que los datos se mantengan consistentes y se protejan de modificaciones no deseadas o incorrectas desde el exterior del objeto. Además, la encapsulación facilita el mantenimiento del código al permitir cambios internos en la implementación de un objeto sin afectar el código que utiliza dicho objeto.",
    category: "Java"
  },
  {
    id: "64a5e645b304aa2b694cfa00",
    question: "¿Cuál es la diferencia entre JDK y JRE?",
    answer: "JDK (Java Development Kit) es un conjunto de herramientas que permite desarrollar aplicaciones Java, mientras que JRE (Java Runtime Environment) es el entorno de ejecución que permite ejecutar aplicaciones Java.",
    category: "Java"
  }
];

function SecLanding() {
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const filteredItems = data.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (selectedCategory !== 'All') {
      const categoryFilteredItems = filteredItems.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredData(categoryFilteredItems);
    } else {
      setFilteredData(filteredItems);
    }
  }, [searchTerm, selectedCategory]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  const categories = Array.from(new Set(data.map((item) => item.category)));
  const titleTransitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });

  const transitions = useTransition(filteredData, {
    from: { opacity: 0, transform: 'scale(0.95)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.95)' },
    trail: 100,
  });

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
      {titleTransitions(({ opacity, transform }) => (
        <animated.h1
          style={{ opacity, transform }}
          className="text-6xl font-bold mb-8 text-green-500 has text-center mt-10"
        >
          Interview Questions
        </animated.h1>
      ))}

        <div className="flex mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-l py-2 px-4 w-full text-xl font-semibold"
            placeholder="Search by question"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="border border-gray-300 rounded-r py-2 px-4 bg-white"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-2">
            {transitions(({ opacity, transform }, item) => (
              <animated.div
                style={{ opacity, transform }}
                key={item.id}
                className="bg-white shadow rounded-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-700 mb-4">{item.answer}</p>
                  {item.category && (
                    <p className="text-gray-500">Category: {item.category}</p>
                  )}
                </div>
              </animated.div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SecLanding;
