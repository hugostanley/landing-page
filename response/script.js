(() => {
   const searchParams = new URLSearchParams(window.location.search);
   const email = searchParams.get("email");
   console.log(email);
   const domName = document.querySelector("[data-name]");
   console.log(domName);

   if (domName) {
      domName.textContent = email;
   }
})();
