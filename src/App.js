import React, { Suspense } from 'react';
import s from './App.module.scss';
import Content from './components/SetContent/SetContent'
import {Route, Switch} from 'react-router-dom';
// import AdminContent from './components/Admin/Admin';
import AdminModalPopUp from './components/Admin/componentsAdmin/AdminModalPopUp/AdminModalPopUp';

const AdminContent = React.lazy(() => import('./components/Admin/Admin'));

function App() {
  return (
      <div className={s.wrapper}>
        <Switch>
          <Route path='/adminmodal' component= {AdminModalPopUp}/>
          <Route path='/admin' render= {() => {
            return <Suspense fallback={<h1>Загрузка админки...</h1>}>
              <AdminContent />
            </Suspense>
          }}/>
          <Route path='/' component= {Content}/>
        </Switch>
         
      </div>
  );
}

export default App;
