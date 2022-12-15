// src/components/App
import * as React from 'react';

// TODO: use dynamic import() when icon is needed
import { Icons } from 'Resources';

export const App: React.FC = () => <>
    <h1>Hello React</h1>
    {/* TODO: use inline instead of url loader */}
    <img src={Icons} alt="all icons" />
</>;

export default App;
