public class TrabalhadorCLT extends Trabalhadores{
    private int bonusFixo = 500;

    public TrabalhadorCLT(String nome, double salarioBase, int bonusFixo){
        super(nome,salarioBase);
        this.bonusFixo = bonusFixo;
    }

    public int getBonusFixo(){
        return bonusFixo;
    }
    public void setBonusFixo(int bonusFixo){
        this.bonusFixo = bonusFixo;
    }

    @Override
    public void calcularSalarioMensal(){
        if (getSalarioBase() > 3000){
            double bonus = getSalarioBase() + bonusFixo;
        }
    }

    @Override
    public void descricaoTrabalho(){
        System.out.println("O funcionário " + getNome() + "É um Desenvolvedor.");
    }
}
