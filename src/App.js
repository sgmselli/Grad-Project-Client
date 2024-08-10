import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react';
import { AuthProvider } from './contexts/auth_context';
import Landing from './routes/landing';
import Sign_Up from './routes/sign_up';
import Sign_In from './routes/sign_in';
import Menu from './routes/menu';
import PrivateRoute from './routes/private';
import Workouts from './routes/workouts';
import Workout from './routes/workout';
import Exercise from './routes/exercise';
import Add from './routes/add';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign_up" element={<Sign_Up />} />
            <Route path="/sign_in" element={<Sign_In />} />


            <Route path="/menu" element={<PrivateRoute><Menu /></PrivateRoute>} />
            <Route path="/workouts/completed" element={<PrivateRoute><Workouts /></PrivateRoute>} />
            <Route path="/workouts/planned" element={<PrivateRoute><Workouts /></PrivateRoute>} />
            <Route path="/workouts/planned/:name/:id" element={<PrivateRoute><Workout /></PrivateRoute>} />
            <Route path="/workouts/completed/:name/:id" element={<PrivateRoute><Workout /></PrivateRoute>} />
            <Route path="/workouts/completed/:name/:id/exercise/:name/:id" element={<PrivateRoute><Exercise /></PrivateRoute>} />
            <Route path="/workouts/planned/:name/:id/exercise/:name/:id" element={<PrivateRoute><Exercise /></PrivateRoute>} />

            <Route path="/workouts/add_workout" element={<PrivateRoute><Add /></PrivateRoute>} />
            
            <Route path="/workouts/completed/:name/:id/add_exercise" element={<PrivateRoute><Add /></PrivateRoute>} />
            <Route path="/workouts/planned/:name/:id/add_exercise" element={<PrivateRoute><Add /></PrivateRoute>} />

            



          </Routes>
        </ChakraProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
