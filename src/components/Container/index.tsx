import { Conteudo, Sessao } from './style'
export const Container = () => {
    return (
        <Conteudo>
            <h1>Bolo de Fubá com Goiaba</h1>
            <Sessao>
                <h2>Ingredientes</h2>
                <ul>
                    <li>1 ovo</li>
                    <li>1 copo (americano) de leite</li>
                    <li>1 copo (americano) de fubá</li>
                    <li>1 copo (americano) de açúcar</li>
                    <li>1/2 copo (americano) de óleo </li>
                    <li>1 copo (americano) farinha de trigo</li>
                    <li>1 coulher de fermento em pó</li>
                    <li>goiabada em pedaços</li>
                    <li>erva-doce a gosto</li>
                </ul>
                <a href='link'>Comprar ingredientes</a>
            </Sessao>
            <Sessao>
                <h2>Modo de preparo</h2>
                <ol>
                    <li>Misture no liquidificador o ovo, o leite, o óleo, o açucar, o fubá e bata bem</li>
                    <li>Despeje a mistura em uma tigela, e misture com a farinha e fermento em pó</li>
                    <li>Despeje a massa em forma untada com manteiga e farinha, e acrescente
                        uma camada de goiabada.Repita este processo até preencher toda a forma
                    </li>
                    <li>Leve ao forno médio(180° C), preaquecido, por 40 minutos.</li>
                </ol>
            </Sessao>
        </Conteudo>
    )
}