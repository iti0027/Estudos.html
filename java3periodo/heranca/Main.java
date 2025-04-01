public class Main {
    public static void main(String[] args) {
        ContaBancariaFisica cbf1 = new ContaBancariaFisica("ítalo", "123", "321", 500, "345678");


        System.out.println(cbf1.getTitular() + " " + cbf1.getCPF() + " " + cbf1.getNumConta() + " ");
        cbf1.setTitular("Carlos");
        System.out.println(cbf1.getTitular());
    }
    
}
