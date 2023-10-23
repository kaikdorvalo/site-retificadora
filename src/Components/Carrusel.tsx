import AutoCenter from '../img/pictures/autocenter.png';
import Retificando from '../img/pictures/retificando.png';
import Balanceamento from '../img/pictures/balanceamento.png';
import SetaDireita from '../img/icons/seta-direita.svg';
import SetaEsquerda from '../img/icons/seta-esquerda.svg';
import { useState } from 'react';


export const Carrusel = () => {

    
    const [translate, setTranslate] = useState('translateX(0%)');
    let carruselValue = 0;
    let carruselIncrement = 33.33;


    const handleLeftButtonCarruselClick = () => {
        setTranslate(`translateX(${carruselValue - carruselIncrement}%)`);
        carruselValue = carruselValue - carruselIncrement;
        // console.log(carruselValue);

    };
      
    const handleRightButtonCarruselClick = () => {
        setTranslate(`translateX(${carruselValue - carruselIncrement}%)`);
        carruselValue = carruselValue + (-carruselIncrement);
        console.log(carruselValue);
    };


    return (
        <div className='flex w-scrren overflow-x-hidden '>
            <div className='flex transition-all ease-in-out duration-1000' style={{transform: translate}}>
                <div className='relative w-screen flex items-center justify-center'>
                    <div className='absolute z-10 flex flex-col items-center w-full'>
                        <div className='flex py-3'>
                            <button className='px-3'>
                                <img src={SetaEsquerda} alt='Seta apontando para esquerda'></img>
                            </button>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-white text-lg'>Retífica de motores</h1>
                                <p className='text-white text-xs'>Nacionais e importados</p>
                            </div>
                            <button className='px-3' onClick={() => { handleRightButtonCarruselClick() }}>
                                <img src={SetaDireita} alt='Seta apontando para a direita'></img>
                            </button>
                        </div>
                        <button className='text-white bg-info rounded-full px-3 py-0.5'>Mais Informações</button>
                    </div>
                    <div className='absolute bg-black/60 w-full h-full'></div>
                    <img src={Retificando} className='w-full' alt='Dois mecânicos retificando um motor'></img>
                </div>


                <div className='relative w-screen flex items-center justify-center'>
                    <div className='absolute z-10 flex flex-col items-center w-full'>
                        <div className='flex py-3'>
                            <button className='px-3' onClick={handleLeftButtonCarruselClick}>
                                <img src={SetaEsquerda} alt='Seta apontando para esquerda'></img>
                            </button>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-white text-lg'>Autocenter</h1>
                                <p className='text-white text-xs'>Serviços em geral</p>
                            </div>
                            <button className='px-3' onClick={() => { handleRightButtonCarruselClick() }}>
                                <img src={SetaDireita} alt='Seta apontando para a direita'></img>
                            </button>
                        </div>
                        <button className='text-white bg-info rounded-full px-3 py-0.5'>Mais Informações</button>
                    </div>
                    <div className='absolute bg-black/60 w-full h-full'></div>
                    <img src={AutoCenter} className='w-full' alt='Dois mecânicos retificando um motor'></img>
                </div>


                <div className='relative w-screen flex items-center justify-center'>
                    <div className='absolute z-10 flex flex-col items-center w-full'>
                        <div className='flex py-3'>
                            <button className='px-3' onClick={handleLeftButtonCarruselClick}>
                                <img src={SetaEsquerda} alt='Seta apontando para esquerda'></img>
                            </button>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-white text-lg'>Balanceamento</h1>
                                <p className='text-white text-xs'>Veículos em geral</p>
                            </div>
                            <button className='px-3'>
                                <img src={SetaDireita} alt='Seta apontando para a direita'></img>
                            </button>
                        </div>
                        <button className='text-white bg-info rounded-full px-3 py-0.5'>Mais Informações</button>
                    </div>
                    <div className='absolute bg-black/60 w-full h-full'></div>
                    <img src={Balanceamento} className='w-full' alt='Dois mecânicos retificando um motor'></img>
                </div>

            </div>
        </div>
    )
}