import { Component, useState, createRef } from "react";

// Componente funcional para el formulario
function ItemForm({ addItem }) {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item !== '') {
            addItem(item); // Comunicación con el componente padre
            setItem('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Añadir un producto"
            />
            <button type="submit">Agregar al carrito</button>
        </form>
    );
}

// Componente de clase para la lista de productos
class ItemList extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        // Inicializar con Algunos productos en el carrito
        this.setState({ items: ["Coca-Cola", "Manjar", "Pan Ciabatta", "Magdalena"] });
    }

    addItem = (item) => {
        this.setState((prevState) => ({
            items: [...prevState.items, item]
        }));
    };

    render() {
        return (
            <div>
                <h2>Carrito de Compras</h2>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Componente Estático
const Title = () => <h1>Bienvenido al carrito de compras</h1>;

// Componente Principal
class App extends Component {

    itemListRef = createRef();

    render() {
        return (
            <div>
                <Title />
                <ItemForm addItem={(item) => this.itemListRef.current.addItem(item)} />
                <ItemList ref={this.itemListRef} />
            </div>
        );
    }
}

export { ItemForm, ItemList, Title, App };