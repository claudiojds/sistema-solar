export default function About () {
    return(
        <section className="flex flex-col gap-5 p-10">
            <div>
                <h2 className="text-xl">Resumo sobre planetas do Sistema Solar</h2>
                <br />
                <ul className="flex flex-col gap-2 pl-3">
                    <li>
                        O Sistema Solar é uma estrutura complexa formada por oito planetas que orbitam o Sol.
                    </li>
                    <li>
                        Seu ordenamento inicia-se a partir do Sol e obedece à seguinte ordem: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.
                    </li>
                    <li>
                        Seus planetas apresentam características distintas e são classificados em rochosos e gasosos.
                    </li>
                    <li>
                        Os quatro planetas rochosos são Mercúrio, Vênus, Terra e Marte; já os quatro gasosos são Júpiter, Saturno, Urano e Netuno.
                    </li>
                    <li>
                        Eles realizam movimentos em torno de si mesmos (rotação) e em torno do Sol (translação). 
                    </li>
                    <li>
                        Atualmente, Plutão é classificado como planeta-anão em razão do seu tamanho diminuto quando comparado aos demais planetas do sistema. 
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl">Qual a ordem dos planetas do Sistema Solar?</h2>
                <p className="pl-3">
                    O Sistema Solar é formado por um conjunto de oito planetas. A sua ordenação dá-se a partir do Sol, principal astro do sistema e orbitado pelos planetas em questão. A ordem dos planetas do Sistema Solar é a seguinte:
                </p>
                <ul className="flex gap-1 justify-center text-xl">
                    <li>Mercúrio</li>
                    <li>-</li>
                    <li>Vênus</li>
                    <li>-</li>
                    <li>Terra</li>
                    <li>-</li>
                    <li>Marte</li>
                    <li>-</li>
                    <li>Júpiter</li>
                    <li>-</li>
                    <li>Saturno</li>
                    <li>-</li>
                    <li>Urano</li>
                    <li>-</li>
                    <li>Netuno</li>
                </ul>
            </div>
        </section>
    )
}