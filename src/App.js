import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './contexts/auth_context';
import { SubscribedProvider } from './contexts/subscribed_context';
import Landing from './routes/landing';
import SignUp from './routes/sign_up';
import SignIn from './routes/sign_in';
import Menu from './routes/menu';
import SubscribedRoute from './routes/private'
import Workouts from './routes/workouts';
import Workout from './routes/workout';
import Exercise from './routes/exercise';
import Add from './routes/add';
import Subscribe from './routes/subscribe';
import Settings from './routes/settings';

function App() {
  return (
    <SubscribedProvider>
    <AuthProvider>
      <Router>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/subscribe" element={<Subscribe />} />


            <Route path="/menu" element={<SubscribedRoute><Menu /></SubscribedRoute>} />
            <Route path="/workouts/completed" element={<SubscribedRoute><Workouts /></SubscribedRoute>} />
            <Route path="/workouts/planned" element={<SubscribedRoute><Workouts /></SubscribedRoute>} />
            <Route path="/workouts/planned/:name/:id" element={<SubscribedRoute><Workout /></SubscribedRoute>} />
            <Route path="/workouts/completed/:name/:id" element={<SubscribedRoute><Workout /></SubscribedRoute>} />
            <Route path="/workouts/completed/:name/:id/exercise/:name/:id" element={<SubscribedRoute><Exercise /></SubscribedRoute>} />
            <Route path="/workouts/planned/:name/:id/exercise/:name/:id" element={<SubscribedRoute><Exercise /></SubscribedRoute>} />

            <Route path="/settings" element={<SubscribedRoute><Settings /></SubscribedRoute>} />

            <Route path="/workouts/add_workout" element={<SubscribedRoute><Add /></SubscribedRoute>} />
            
            <Route path="/workouts/completed/:name/:id/add_exercise" element={<SubscribedRoute><Add /></SubscribedRoute>} />
            <Route path="/workouts/planned/:name/:id/add_exercise" element={<SubscribedRoute><Add /></SubscribedRoute>} />

            



          </Routes>
        </ChakraProvider>
      </Router>
    </AuthProvider>
    </SubscribedProvider>
  );
}

export default App;
