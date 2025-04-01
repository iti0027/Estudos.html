package Composicao;

public class Main {
    public static void main (String[] args){
        Pessoa p1 = new Pessoa("ítalo Cézar", 21);

        p1.CriarConta("321");
        System.out.println(p1);
    }
}
