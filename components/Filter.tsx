import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Categoria } from '../constants/categoria';

type Props = {
  categoriaId?: string;
  ordemId?: string;
};

const Filter = ({ categoriaId = '', ordemId = '' }: Props) => {
  const router = useRouter();
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'radioCategory') {
      let ordemParam = '';
      if (ordemId != '') {
        ordemParam = `?ordemId=${ordemId}`;
      }
      let postPath = '/posts';
      if (value != '') {
        postPath = `/posts/category/${value}`;
      }
      router.push(postPath + ordemParam);
    } else if (name === 'radioOrder') {
      let ordemParam = '';
      if (value != '') {
        ordemParam = `?ordemId=${value}`;
      }
      let postPath = '/posts';
      if (categoriaId != '') {
        postPath = `/posts/category/${categoriaId}`;
      }
      router.push(postPath + ordemParam);
    }
  };
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'block' }}>
        Filtro:
        <br />
        <input
          type="radio"
          id="todos"
          name="radioCategory"
          value=""
          defaultChecked={categoriaId == ''}
          onChange={handleRadioChange}
        />
        <label htmlFor="todos">Todos</label>
        <br />
        <input
          type="radio"
          id="dp"
          name="radioCategory"
          value={`${Categoria.desenvolvimentoPessoal}`}
          defaultChecked={categoriaId == Categoria.desenvolvimentoPessoal}
          onChange={handleRadioChange}
        />
        <label htmlFor="dp">Desenvolvimento Pessoal</label>
        <br />
        <input
          type="radio"
          id="eg"
          name="radioCategory"
          value={`${Categoria.estrategiaEGestao}`}
          defaultChecked={categoriaId == Categoria.estrategiaEGestao}
          onChange={handleRadioChange}
        />
        <label htmlFor="eg">Estratégia e Gestão</label>
        <br />
        <input
          type="radio"
          id="gp"
          name="radioCategory"
          value={`${Categoria.gestaoDePessoas}`}
          defaultChecked={categoriaId == Categoria.gestaoDePessoas}
          onChange={handleRadioChange}
        />
        <label htmlFor="gp">Gestão de Pessoas</label>
        <br />
        <br />
      </div>
      <div style={{ display: 'block' }}>
        Ordem:
        <br />
        <input
          type="radio"
          id="none"
          name="radioOrder"
          value=""
          defaultChecked={ordemId != 'ASC' && ordemId != 'DESC'}
          onChange={handleRadioChange}
        />
        <label htmlFor="none">Nenhuma</label>
        <br />
        <input
          type="radio"
          id="asc"
          name="radioOrder"
          value="ASC"
          defaultChecked={ordemId == 'ASC'}
          onChange={handleRadioChange}
        />
        <label htmlFor="dp">Crescente</label>
        <br />
        <input
          type="radio"
          id="desc"
          name="radioOrder"
          value="DESC"
          defaultChecked={ordemId == 'DESC'}
          onChange={handleRadioChange}
        />
        <label htmlFor="eg">Decrescente</label>
      </div>
    </div>
  );
};

export default Filter;
