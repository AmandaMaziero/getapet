import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

function MyPets() {
    const [pets, setPets] = useState([])

    return (
        <section>
            <div>
                <h1>Meus Pets</h1>
                <Link to="/pet/add">Cadastrar Pet</Link>
            </div>
            <div>
                {pets.length > 0 &&
                    <p>Meus Pets Cadastrados</p>
                }
                {pets.length === 0 &&
                    <p>Não há Pets Cadastrados</p>
                }
            </div>
        </section>
    )
}

export default MyPets