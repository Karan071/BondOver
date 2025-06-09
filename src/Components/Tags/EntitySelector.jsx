import styles from "../Tags/EntitySelector.module.css";

const defaultEntities = [
    { label: 'School / College', icon: '🏫' },
    { label: 'Corporate / Brand', icon: '🏢' },
    { label: 'NGO / Foundation', icon: '🎗️' },
    { label: 'Sports Club / Association', icon: '👥' },
    { label: 'Individual / Freelancer', icon: '🧑‍💻' }
];

export const EntitySelector = ({
    value,
    onChange,
    options = defaultEntities
}) => {
    return (
        <div className={styles.container}>
            {options.map((entity, index) => {
                const label = typeof entity === "string" ? entity : entity.label;
                const icon = typeof entity === "string" ? "" : entity.icon;
                const isSelected = value === label;
                return (
                    <button
                        key={index}
                        className={`${styles.card} ${isSelected ? styles.selected : ""}`}
                        type="button"
                        onClick={() => onChange(label)}
                    >
                        {icon && <span className={styles.icon}>{icon}</span>}
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

