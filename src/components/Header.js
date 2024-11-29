import React from 'react';

function Navegacao() {
    return (
        <header>
        <nav>
            <ul>
                <li><a href="home.html">MyFinance</a></li>
                <div className="navbar">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="transacoes.html">Transações</a></li>
                </div>
            </ul>
        </nav>
    </header>
    );
}

export default Navegacao;

