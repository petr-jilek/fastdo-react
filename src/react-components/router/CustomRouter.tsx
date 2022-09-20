import { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";

interface Props {
    history: any,
    children: JSX.Element[]
}

export default function CustomRouter({ history, children, ...props }: Props) {
    const [state, setState] = useState({
        action: history.action,
        location: history.location
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            {...props}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        >
            {children}
        </Router>
    );
};
