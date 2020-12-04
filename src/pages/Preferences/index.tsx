import React, { useState, useCallback, useEffect } from 'react';

import { FiTrash } from 'react-icons/fi';
import { Container } from './styles';

import SideBar from '../../components/SideBar';
import NewCategoryModal from './NewCategoryModal';
import NewSubcategoryModal from './NewSubcategoryModal';
import api from '../../services/api';

interface Preference {
  _id: string;
  category: string;
  subcategories: string[];
}

export interface SelectedPreference {
  _id: string;
  category: string;
}

const Preferences: React.FC = () => {
  const [preferences, setPreferences] = useState<Preference[]>([]);

  const [selectedPreference, setSelectedPreference] = useState<
    SelectedPreference
  >({} as SelectedPreference);

  const [newCategoryModalVisible, setNewCategoryModalVisible] = useState(false);
  const [newSubategoryModalVisible, setNewSubategoryModalVisible] = useState(
    false,
  );

  const handleToggleNewCategoryModal = useCallback(() => {
    setNewCategoryModalVisible(state => !state);
  }, []);

  const handleToggleNewSubategoryModal = useCallback(() => {
    setNewSubategoryModalVisible(state => !state);
  }, []);

  const handleAddNewSubcategory = useCallback(
    (category: string, category_id: string) => {
      handleToggleNewSubategoryModal();

      setSelectedPreference({
        _id: category_id,
        category,
      });
    },
    [handleToggleNewSubategoryModal],
  );

  const handleDeletePreference = useCallback(
    async (category: string, subcategory: string) => {
      const selectedCategory = preferences.find(
        preference => preference.category === category,
      );

      const filteredSubcategories = selectedCategory?.subcategories.filter(
        subcategoryItem => subcategoryItem !== subcategory,
      );

      if (selectedCategory && filteredSubcategories) {
        const updatedCategory = {
          _id: selectedCategory?._id,
          category: selectedCategory?.category,
          subcategories: filteredSubcategories,
        };

        const filteredCategories = preferences.filter(
          preference => preference.category !== category,
        );

        setPreferences([...filteredCategories, updatedCategory]);

        await api.delete(`/admin/preferences/${category}/${subcategory}`);
      }
    },
    [preferences],
  );

  useEffect(() => {
    async function loadPreferences(): Promise<void> {
      const response = await api.get('/preferences/list');
      setPreferences(response.data);
    }
    loadPreferences();
  }, []);

  return (
    <>
      <Container>
        <SideBar />

        <main>
          <header>
            <h2>Preferências cadastradas</h2>
            <button type="button" onClick={handleToggleNewCategoryModal}>
              Nova categoria
            </button>
          </header>

          <ul>
            {preferences.map(preference => (
              <li key={preference._id}>
                <div>
                  <strong>{preference.category}</strong>
                  <ul className="subcategories">
                    {preference.subcategories.map(subcategory => (
                      <li key={subcategory}>
                        <span>{subcategory}</span>
                        <button
                          type="button"
                          onClick={() => {
                            handleDeletePreference(
                              preference.category,
                              subcategory,
                            );
                          }}
                        >
                          <FiTrash color="#c53030" size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <footer>
                  <button
                    type="button"
                    onClick={() => {
                      handleAddNewSubcategory(
                        preference.category,
                        preference._id,
                      );
                    }}
                  >
                    Nova subcategoria
                  </button>
                </footer>
              </li>
            ))}
          </ul>
        </main>
      </Container>
      <NewCategoryModal
        isVisible={newCategoryModalVisible}
        toogleModal={handleToggleNewCategoryModal}
      />
      {selectedPreference._id && (
        <NewSubcategoryModal
          isVisible={newSubategoryModalVisible}
          toogleModal={handleToggleNewSubategoryModal}
          selectedCategory={selectedPreference}
        />
      )}
    </>
  );
};

export default Preferences;
