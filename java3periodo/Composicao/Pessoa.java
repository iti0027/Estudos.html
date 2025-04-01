package Composicao;

public class Pessoa {
    private String nome;
    private int idade;
    private ContaBancaria conta;

    public Pessoa (String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome(){
        return nome;
    }

    public int getIdade(){
        return idade;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setIdade(int idade){
        this.idade = idade;
    }

    public void CriarConta(String numConta){
        conta = new ContaBancaria(numConta);
    }

    @Override
    public String toString(){
        return "Nome " + nome + "Idade: " + idade + "Numconta: " + conta;
    }
}
