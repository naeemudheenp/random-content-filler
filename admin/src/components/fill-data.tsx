import { Button } from '@strapi/design-system';

export function FillRandomData() {
  const generateRandomData = () => {
    return {
      title: 'Random Title ' + Math.random().toString(36).substring(7),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
  };
  return (
    <Button
      onClick={async () => {
        try {
          const randomData = generateRandomData();

          const inputFields = document.querySelectorAll(
            'input, textarea, select,div[role="textbox"]'
          );

          inputFields.forEach((input: any) => {
            if (input.name === 'title') {
              input.value = randomData.title;
              console.log('DIVDFAFDS', input);
            } else if (input.name === 'description') {
              input.value = randomData.description;
            } else if (input.tagName === 'DIV') {
              input.textContent = randomData.description;
            } else {
              input.value = `Random ${Math.random().toString(36).substring(7)}`;
            }
          });
        } catch (error) {
          console.log('Error');
        }
      }}
    >
      Fill random data
    </Button>
  );
}
