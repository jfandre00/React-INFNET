import React from 'react';
import { useForm } from 'react-hook-form';
import './FormularioReactHookForm.css';

function FormularioReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    mode: 'onChange', // Validação em tempo real
    defaultValues: {
      nome: '',
      email: '',
      idade: '',
      senha: '',
      confirmarSenha: '',
      genero: '',
      interesses: [],
      biografia: '',
      aceitarTermos: false
    }
  });

  // Observar o campo senha para validar confirmação
  const senha = watch('senha');

  // Função chamada quando o formulário é submetido
  const onSubmit = async (data) => {
    try {
      console.log('Dados do formulário:', data);
      
      // Simular uma requisição assíncrona
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Formulário enviado com sucesso!');
      reset(); // Limpa o formulário após envio
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    }
  };

  return (
    <div className="formulario-container">
      <h2>Formulário com React Hook Form</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        {/* Campo Nome */}
        <div className="campo-grupo">
          <label htmlFor="nome">Nome Completo *</label>
          <input
            id="nome"
            type="text"
            {...register('nome', {
              required: 'Nome é obrigatório',
              minLength: {
                value: 2,
                message: 'Nome deve ter pelo menos 2 caracteres'
              },
              maxLength: {
                value: 50,
                message: 'Nome deve ter no máximo 50 caracteres'
              }
            })}
            className={errors.nome ? 'erro' : ''}
          />
          {errors.nome && <span className="mensagem-erro">{errors.nome.message}</span>}
        </div>

        {/* Campo Email */}
        <div className="campo-grupo">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            className={errors.email ? 'erro' : ''}
          />
          {errors.email && <span className="mensagem-erro">{errors.email.message}</span>}
        </div>

        {/* Campo Idade */}
        <div className="campo-grupo">
          <label htmlFor="idade">Idade *</label>
          <input
            id="idade"
            type="number"
            {...register('idade', {
              required: 'Idade é obrigatória',
              min: {
                value: 18,
                message: 'Idade mínima é 18 anos'
              },
              max: {
                value: 120,
                message: 'Idade máxima é 120 anos'
              }
            })}
            className={errors.idade ? 'erro' : ''}
          />
          {errors.idade && <span className="mensagem-erro">{errors.idade.message}</span>}
        </div>

        {/* Campo Senha */}
        <div className="campo-grupo">
          <label htmlFor="senha">Senha *</label>
          <input
            id="senha"
            type="password"
            {...register('senha', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'Senha deve ter pelo menos 6 caracteres'
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: 'Senha deve conter ao menos: 1 letra minúscula, 1 maiúscula e 1 número'
              }
            })}
            className={errors.senha ? 'erro' : ''}
          />
          {errors.senha && <span className="mensagem-erro">{errors.senha.message}</span>}
        </div>

        {/* Campo Confirmar Senha */}
        <div className="campo-grupo">
          <label htmlFor="confirmarSenha">Confirmar Senha *</label>
          <input
            id="confirmarSenha"
            type="password"
            {...register('confirmarSenha', {
              required: 'Confirmação de senha é obrigatória',
              validate: value => 
                value === senha || 'As senhas não coincidem'
            })}
            className={errors.confirmarSenha ? 'erro' : ''}
          />
          {errors.confirmarSenha && <span className="mensagem-erro">{errors.confirmarSenha.message}</span>}
        </div>

        {/* Campo Gênero */}
        <div className="campo-grupo">
          <label htmlFor="genero">Gênero *</label>
          <select
            id="genero"
            {...register('genero', {
              required: 'Selecione um gênero'
            })}
            className={errors.genero ? 'erro' : ''}
          >
            <option value="">Selecione...</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
            <option value="prefiro-nao-informar">Prefiro não informar</option>
          </select>
          {errors.genero && <span className="mensagem-erro">{errors.genero.message}</span>}
        </div>

        {/* Campo Interesses (Checkboxes) */}
        <div className="campo-grupo">
          <label>Interesses:</label>
          <div className="checkbox-grupo">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="tecnologia"
                {...register('interesses')}
              />
              Tecnologia
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="esportes"
                {...register('interesses')}
              />
              Esportes
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="musica"
                {...register('interesses')}
              />
              Música
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="leitura"
                {...register('interesses')}
              />
              Leitura
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="viagem"
                {...register('interesses')}
              />
              Viagem
            </label>
          </div>
        </div>

        {/* Campo Biografia */}
        <div className="campo-grupo">
          <label htmlFor="biografia">Biografia:</label>
          <textarea
            id="biografia"
            rows="4"
            placeholder="Conte um pouco sobre você..."
            {...register('biografia', {
              maxLength: {
                value: 500,
                message: 'Biografia deve ter no máximo 500 caracteres'
              }
            })}
            className={errors.biografia ? 'erro' : ''}
          />
          {errors.biografia && <span className="mensagem-erro">{errors.biografia.message}</span>}
        </div>

        {/* Campo Aceitar Termos */}
        <div className="campo-grupo">
          <label className="checkbox-label">
            <input
              type="checkbox"
              {...register('aceitarTermos', {
                required: 'Você deve aceitar os termos e condições'
              })}
            />
            Eu aceito os termos e condições *
          </label>
          {errors.aceitarTermos && <span className="mensagem-erro">{errors.aceitarTermos.message}</span>}
        </div>

        {/* Botões */}
        <div className="botoes-grupo">
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="botao-enviar"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Formulário'}
          </button>
          
          <button
            type="button"
            onClick={() => reset()}
            className="botao-limpar"
          >
            Limpar Formulário
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioReactHookForm;