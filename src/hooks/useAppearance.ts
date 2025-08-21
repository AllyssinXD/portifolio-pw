import { useContext } from "react";
import { AppearanceContext } from "../contexts/AppearanceContext";

function useAppearance() {
    return useContext(AppearanceContext);
}

export default useAppearance;