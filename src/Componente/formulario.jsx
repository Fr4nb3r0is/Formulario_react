import { useState } from "react";

// Componente Navbar
function Navbar() {
    return (
        <nav>
            <h1>Gestión de Personas</h1>
            <p>Sistema de registro y administración</p>
        </nav>
    );
}

function Personas({ onAgregarPersona }) {
    // useState devuelve un par de valores
    // 1. El estado actual
    // 2. Una función que actualiza el estado

    //tener 3 variables nombre apellido 
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");

    // Función para agregar una persona al array
    const agregarPersona = () => {
        if (nombre && apellido && email) {
            const nuevaPersona = {
                id: Date.now(), // ID único
                nombre: nombre,
                apellido: apellido,
                email: email
            };
            onAgregarPersona(nuevaPersona);
            // Limpiar los campos después de agregar
            setNombre("");
            setApellido("");
            setEmail("");
        }
    };

    return (
        <div>
            <h2>Agregar Persona</h2>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Email: {email}</p>
            <input 
                type="text" 
                placeholder="Nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Apellido" 
                value={apellido}
                onChange={(e) => setApellido(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={agregarPersona}>Agregar Persona</button>
            <button onClick={() => {
                setNombre("");
                setApellido("");
                setEmail("");
            }}>Limpiar</button>
        </div>
    );
}

// Componente Tabla
function Tabla({ personas }) {
    return (
        <div>
            <h2>Lista de Personas</h2>
            {personas.length === 0 ? (
                <p>No hay personas registradas</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map((persona) => (
                            <tr key={persona.id}>
                                <td>{persona.id}</td>
                                <td>{persona.nombre}</td>
                                <td>{persona.apellido}</td>
                                <td>{persona.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export { Navbar, Personas, Tabla };
export default Personas;