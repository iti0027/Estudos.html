public abstract class Trabalhadores {
    private String nome;
    private double salarioBase;

    public Trabalhadores(String nome, double salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    public String getNome(){
        return nome;
    }
    public double getSalarioBase(){
        return salarioBase;
    }

    public void setNome(String nome){
        this.nome = nome;
    }
    public void setSalarioBase(double salarioBase){
        this.salarioBase = salarioBase;
    }

    public abstract void calcularSalarioMensal();

    public abstract void descricaoTrabalho();

}
