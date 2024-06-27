import { AppBar, Box, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePage = (name: string) => () => {
    setAnchorEl(null);
    navigate(`${name}`, { replace: true });
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Button
            key="alphabet"
            sx={{ my: 1, mx: 2, color: "white", display: "block" }}
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            alphabet
          </Button>
          <Button
            key="words"
            sx={{ my: 1, mx: 2, color: "white", display: "block" }}
            onClick={handlePage("/words")}
          >
            words
          </Button>
          <Button
            key="grammar"
            sx={{ my: 1, mx: 2, color: "white", display: "block" }}
            onClick={handlePage("/grammar")}
          >
            grammar
          </Button>
        </Box>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handlePage("/katakana")}>Katakana</MenuItem>
          <MenuItem onClick={handlePage("/hiragana")}>Hiragana</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
