package Funcionarios;

public class Desenvolvedor extends Funcionarios {
    private double produtividade;

    public Desenvolvedor(String nome, double salarioBase, double produtividade){
        super(nome, salarioBase);
        this.produtividade = produtividade;
    }

    public double getProdutividade(){
        return produtividade;
    }

    public void setProdutividade(double produtividade) throws Exception {
        if (produtividade < 0) {
            throw new Exception();
        } 
        this.produtividade = produtividade;
    }

    @Override
    public double calcularSalario(){
        System.out.println("O nome do desenvolvedor é " + getNome());
        System.out.println("O salário base do desenvolvedor é " + getSalarioBase());
        System.out.println("A produtividade o desenvolvedor é " + produtividade);
        return getSalarioBase() * produtividade;
    }
}
