# Financial Control - Controle de finanças
	
	Aplicação web para controle de finanças.

## Iniciando o container via docker

	Primeiro é necessário possuir o docker instalado na máquina na qual a aplicação será iniciada.
	Para iniciar a aplicação execute os seguintes comandos:

		docker build -t my-apache2 .

		docker run -p 9995:80 -it --name fcontrol_client -d my-apache2