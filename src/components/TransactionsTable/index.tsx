import { SearchForm } from "../../pages/Transactions/components/SearchForm";
import { PriceHighlight, Table, TransactionsContainer } from "./styles";

export function TransactionsTable() {
  return (
    <TransactionsContainer>
      <SearchForm />
      
      <Table>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">
                R$ 12.000,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>12/02/2023 </td>
          </tr>
          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighlight variant="outcome">
                - R$ 59,00
              </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>12/02/2023 </td>
          </tr>
        </tbody>
      </Table>
    </TransactionsContainer>
  )
}