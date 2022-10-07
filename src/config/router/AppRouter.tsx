import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

export const AppRouter: React.FC = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};
