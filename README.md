# Financial Control - Controle de finanças
	
	Aplicação web para controle de finanças.

## Iniciando o container via docker

	Primeiro é necessário possuir o docker instalado na máquina na qual a aplicação será iniciada.
	Para iniciar a aplicação execute os seguintes comandos:

		** docker build -t my-apache2 . **

		** docker run -p _9995:80_ -it --name fcontrol_client -d my-apache2 **