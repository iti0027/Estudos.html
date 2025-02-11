public class App{
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        // usa o system.out.println para dar um print e mostrar na tela uma informação.

        // como criar uma variável (devine o tipo "classe" e o nome da variável)
        char gender = 'M'; // ' simples é para algo ' e "" é para string
        String name = "ítalo"; // utiliza o método String para aramazenar uma string
        int age = 22; // utiliza o método int para aramazenar um número
        double height = 1.82; // utiliza o método double para aramazenar um número decimal
        boolean canVote = false;   

        // Para mostrar as variáveis...
        System.out.println ("Nome:" + name);
        System.out.println ("Idade:" +  age);
        System.out.println ("Sexo:" + gender);


        // para criar uma condição em Java
        if (age < 16){
            System.out.println(name + "não pode votar.");
        } 
        else if (age < 18 || age > 65){
            System.out.println(name + "pode votar (facultativo.)");
        } canVote= true;

        if (canVote = true){ // podemos usar (canVote) para simplificar.
            System.out.println(name + "vote conciente!");
        }

        else{
            System.out.println(name + " voto obrigatório!");
        } canVote = true; 
    }
};