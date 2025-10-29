# Buenas Prácticas con Git y GitHub

## Descripción
Para finalizar, vamos a hacer un recorrido por un listado de 10 buenas prácticas que puedes seguir a la hora de usar tanto Git como GitHub.

## Git

1. **Organiza repositorios:** Crea repositorios independientes para diferentes proyectos. Esto nos facilita la colaboración y el mantenimiento del código.

2. **Utiliza ramas:** Trabaja en ramas separadas para desarrollar nuevas características, correcciones de errores o experimentar con tu proyecto. Las ramas nos permiten mantener el código estable y facilitan la integración de cambios sin afectar a la rama principal.

3. **Haz commits atómicos:** Cada *commit* debe representar una única unidad de cambio lógico, facilitando la revisión del historial y el seguimiento de los cambios. Además, es más fácil entender, revisar, revertir o ajustar *commits* individuales.

4. **Escribe mensajes de commit claros y significativos:** Describe el propósito y el contexto del cambio en el mensaje del *commit*. Esto ayuda a otros colaboradores, y a nosotros mismos, a entender la razón del cambio y facilita la búsqueda de *commits* específicos en el historial. También podemos usar referencias que nos sirvan para identificar su contenido, como identificadores asociados a una tarea en un sistema de gestión de trabajo.

5. **Mantén un historial limpio:** Evita enviar cambios innecesarios o conflictivos, y usa la fusión de cambios (*merge*) adecuadamente. Esto hace que el historial de *commits* sea más fácil de entender y navegar.

6. **Usa etiquetas:** Utiliza etiquetas (*tags*) para marcar puntos importantes en el historial del proyecto, como versiones o lanzamientos a producción. Las etiquetas proporcionan una forma rápida de volver a un punto específico en el tiempo y facilitan la gestión de versiones.

7. **Haz revisiones de código:** Antes de integrar cambios en la rama principal, realiza revisiones de código para garantizar la calidad y la coherencia del proyecto. GitHub ofrece características de revisión de código a través de *Pull Request* que facilitan esta tarea.

8. **Resuelve conflictos:** Al fusionar ramas, pueden surgir conflictos. Es importante resolverlos de forma coherente y asegurarse de que los cambios no introduzcan errores ni afecten al rendimiento del proyecto.

9. **Mantén copias de seguridad y haz push con regularidad:** Debemos asegurarnos de poseer copias de seguridad de nuestros repositorios locales, y hacer *push* de los cambios al repositorio remoto regularmente. Esto protege nuestros datos y facilita la colaboración.

10. **Continúa aprendiendo:** Git es una herramienta poderosa y flexible, pero también puede ser compleja. Continúa aprendiendo sobre sus características y prácticas recomendadas para aprovechar al máximo su potencial y mejorar la eficiencia de nuestros proyectos.


## GitHub

1. **Personaliza tu perfil:** Configura la página de inicio asociada a tu usuario de GitHub. GitHub es una gran carta de presentación para desarrolladores.

2. **Crea un README:** Incluye siempre un archivo `README.md` en tu repositorio. Este archivo debe proporcionar una descripción general del proyecto, instrucciones de instalación y configuración, información sobre cómo contribuir y cualquier otra información relevante. Su contenido puede variar dependiendo de si se trata de un proyecto público o privado.

3. **Licencia de software:** Añade una licencia a tu repositorio para informar a otros usuarios de cómo lo pueden utilizar y qué limitaciones posee. GitHub ofrece una variedad de licencias populares que podemos elegir fácilmente.

4. **Usa Pull Request:** Utiliza el mecanismo de *Pull Request* para proponer cambios a un repositorio, en lugar de modificar directamente la rama principal. Las *Pull Request* permiten la revisión del código y las discusiones antes de incorporar los cambios al proyecto.

5. **Revisión de código:** Realiza revisiones de código en las *Pull Request* antes de fusionarlas. Esto asegura que el código cumpla con los estándares de calidad y reduce la probabilidad de introducir errores. También puedes automatizar tareas con *GitHub Actions*.

6. **Utiliza Issues:** Emplea el sistema de *Issues* de GitHub para rastrear y gestionar errores, mejoras y otras tareas relacionadas con el proyecto. Esto ayuda a mantener el progreso del proyecto y fomenta la colaboración.

7. **Etiquetas y Milestones:** Usa etiquetas y *milestones* en *Issues* y *Pull Request* para categorizar y priorizar el trabajo. Las etiquetas pueden indicar el tipo de tarea (por ejemplo, error o mejora), mientras que los *milestones* nos ayudan a organizar las tareas en fases asociadas a la evolución del proyecto.

8. **Documentación:** Mantén la documentación actualizada, incluidos los archivos de ayuda, la wiki del repositorio y cualquier otro material relacionado. Una documentación adecuada facilita la comprensión y contribución al proyecto por parte de otros desarrolladores.

9. **Comparte y colabora:** Crea tus propios proyectos de código abierto y colabora en otros. Esta es la mejor manera para ayudar a que la comunidad de desarrollo de software siga avanzando.

10. **Continúa aprendiendo:** GitHub es una gran plataforma en constante evolución, y sus herramientas van mucho más allá de los mecanismos propios de Git. Sigue sus avances y explora sus distintas características.

## Conclusión

Al seguir estas prácticas, nos aseguraremos de utilizar **Git y GitHub** de manera efectiva, organizada y colaborativa, manteniendo la calidad y la estabilidad de nuestros proyectos.
