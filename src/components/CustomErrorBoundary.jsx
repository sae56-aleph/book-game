import React, { Component } from "react";
import PageErreur from "./PageErreur"; // Importez votre page d'erreur 404 personnalisée

class CustomErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez également journaliser l'erreur ici
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Affichez votre page d'erreur personnalisée
      return <PageErreur />;
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;
