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

          const inputFields = document.querySelectorAll('input, textarea, select');

          inputFields.forEach((input: any) => {
            if (input.type === 'text' || input.tagName.toLowerCase() === 'textarea') {
              if (input.name === 'title') {
                input.value = randomData.title;
              } else if (input.name === 'description') {
                input.value = randomData.description;
              } else {
                input.value = `Random ${Math.random().toString(36).substring(7)}`;
              }
            } else if (input.tagName.toLowerCase() === 'select') {
              const options = input.options;
              const randomIndex = Math.floor(Math.random() * options.length);
              input.selectedIndex = randomIndex;
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
