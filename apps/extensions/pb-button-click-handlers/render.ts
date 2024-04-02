export const buttonClickHandlers = [
    {
        type: "pb-page-element-button-click-handler",
        name: "simple-handler",
        title: "A Simple Handler",
        // Once the button is clicked, we display a simple alert message.
        handler: () => {
          alert("I was clicked!");
        }
      }
];