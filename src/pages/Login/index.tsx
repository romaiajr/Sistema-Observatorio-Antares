import React from 'react'
import Navbar from '../../components/NavBar'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import './styles.css';

function Login() {
    return (
        <div id = "Form_page">
            <div className = "form">
                <div className="form_image">
                    <a href="/">
                        <img className="logo" src={Logo} alt="Logo Antares" />
                    </a>
                </div>
                <div className = "container_form" >

                </div>
            </div>
        </div >
    );
}

export default Login; 

{/*<div id="initial">
<Container>
  <div>
    <Paper id="form" elevation={4}>
     <div>
     <Link to = "/"><img id="image" roundedCircle src={logo} /></Link>
      </div>
      <div>
        <h1 id="title2">Login</h1>
      </div>
      <p id = 'erro'> {this.state.error}</p>
      <Form id="info">
        <div id="loginn">
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountBoxIcon style={{ fontSize: 33 }} />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                variant="outlined"
                id="inputGridLogin"
                label="Usuário"
                value={this.state.login}
                onChange={this.handleChangeLogin}
              />
            </Grid>
          </Grid>
        </div>

        <div id="passwaordd">
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockOpenIcon style={{ fontSize: 33 }} />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                variant="outlined"
                id="inputGridPassword"
                label="Senha"
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                onKeyPress={this.handleKeyPress}
              />
            </Grid>
          </Grid>
        </div>

        </Form>
        <div
          style={{
            marginTop: "50px",
          }}
        >
        <Button
          id="entrar"
          block
          variant="success"
          onClick={this.handleLogin}
          onKeyPress={this.handleKeyPress}
        >
          Entrar
        </Button>

        <Link to="/cadastro">
          <Button
            id="cadastrar"
            block
            variant="secondary"
            type="submit"
          >
            Cadastre-se
          </Button>
        </Link>
      </div>
      <ForgetPassword />
    </Paper>
  </div>
</Container>
</div>*/}