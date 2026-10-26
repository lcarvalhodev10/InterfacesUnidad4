import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';
import { Tarea } from '../model/entities/tarea';

type TareaItemProps = {
    tarea: Tarea;
    alCambiarEstado: (id: number) => void;
};

export function TareaItem({ tarea, alCambiarEstado }: TareaItemProps) {
    const theme = useTheme();
    const estado = tarea.estado ? 'Concluída' : 'Pendente';

    return (
        <Pressable
            accessibilityRole="checkbox"
            accessibilityLabel={`${tarea.titulo}, ${estado}. Toque para alterar o estado.`}
            accessibilityState={{ checked: tarea.estado }}
            onPress={() => alCambiarEstado(tarea.id)}
            style={({ pressed }) => [pressed && styles.pressionado]}
        >
            <ThemedView
                style={[
                    styles.cartao,
                    { borderColor: theme.backgroundSelected },
                ]}
                type="backgroundElement"
            >
                <View style={styles.texto}>
                    <ThemedText
                        style={[
                            styles.titulo,
                            tarea.estado && styles.tituloConcluido,
                        ]}
                    >
                        {tarea.titulo}
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                        Toque para marcar como {tarea.estado ? 'pendente' : 'concluída'}
                    </ThemedText>
                </View>

                <ThemedText style={styles.estado}>
                    {tarea.estado ? '✅' : '⏳'}
                </ThemedText>
            </ThemedView>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressionado: {
        opacity: 0.75,
    },
    cartao: {
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingHorizontal: 16,
        paddingVertical: 18,
    },
    texto: {
        flex: 1,
        gap: 4,
    },
    titulo: {
        fontSize: 17,
        fontWeight: '600',
    },
    tituloConcluido: {
        opacity: 0.6,
        textDecorationLine: 'line-through',
    },
    estado: {
        fontSize: 22,
        marginLeft: 12,
    },
});