# Modal Component

A simple, reusable modal component for React applications.

## Features

- Lightweight and reusable.
- Built with React and styled using TailwindCSS.
- Fully customizable for your project’s needs.

## Installation

To install the package, run:

```bash
npm install @vanessapeixoto/my-modal
```

## Usage

```bash
import Modal from '@vanessapeixoto/my-modal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <button onClick={openModal} className="btn">Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="This is a message inside the modal!"
      />
    </div>
  );
}

export default App;
```

### Props

|   Prop        |   Type        |   Required    |         Description                   |
|---------------|---------------|---------------|---------------------------------------|
|   isOpen      |   boolean     |     Yes       |Controls whether the modal is visible. |
|   onClose     | () => void    |     Yes       |Callback to close the modal.           |
|   message     |   string      |     Yes       |The message displayed inside the modal.|


### Styling

The modal uses TailwindCSS for default styles. You can override these styles by providing your custom classes or by using Tailwind's utility-first approach. For example:

```bash
<Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  message="Custom message"
  className="bg-red-500 p-10 text-white"
/>
```
Alternatively, you can fork the repository and modify the styles directly in src/component/Modal.tsx.

### Licence

MIT License

Copyright (c) 2024 [Peixoto Vanessa]