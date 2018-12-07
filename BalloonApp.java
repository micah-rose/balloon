package labBalloon;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import java.awt.Font;
import javax.swing.JButton;
import java.awt.GridLayout;
import java.awt.Color;
import javax.swing.border.LineBorder;
import javax.swing.ImageIcon;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.util.Random;
import java.awt.event.ActionEvent;

public class BalloonApp extends JFrame 
{

	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) 
	{
		EventQueue.invokeLater(new Runnable() 
		{
			public void run() 
			{
				try 
				{
					BalloonApp frame = new BalloonApp();
					frame.setVisible(true);
				} catch (Exception e) 
				{
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public BalloonApp() 
	{
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 592, 388);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);
		
		JLabel lblNewLabel = new JLabel("Lab Balloon");
		lblNewLabel.setFocusable(false);
		lblNewLabel.setFont(new Font("Lucida Grande", Font.BOLD, 30));
		lblNewLabel.setHorizontalAlignment(SwingConstants.CENTER);
		contentPane.add(lblNewLabel, BorderLayout.NORTH);
		
		JPanel pnlUserInterface = new JPanel();
		FlowLayout flowLayout = (FlowLayout) pnlUserInterface.getLayout();
		contentPane.add(pnlUserInterface, BorderLayout.SOUTH);
		
		JButton btnGenerateRandomBalloons = new JButton("Generate Random Balloons");

		btnGenerateRandomBalloons.setFocusable(false);
		btnGenerateRandomBalloons.setFont(new Font("Lucida Grande", Font.BOLD, 20));
		pnlUserInterface.add(btnGenerateRandomBalloons);
		
		JLabel lblResults = new JLabel("Results");
		lblResults.setBorder(new EmptyBorder(5, 20, 5, 20));
		lblResults.setFocusable(false);
		lblResults.setFont(new Font("Lucida Grande", Font.BOLD, 20));
		lblResults.setHorizontalAlignment(SwingConstants.CENTER);
		pnlUserInterface.add(lblResults);
		
		JPanel pnlBalloons = new JPanel();
		pnlBalloons.setBorder(new EmptyBorder(0, 15, 0, 15));
		contentPane.add(pnlBalloons, BorderLayout.CENTER);
		pnlBalloons.setLayout(new GridLayout(1, 0, 25, 0));
		
		JLabel lblBalloon1 = new JLabel("Balloon 1");
		lblBalloon1.setFont(new Font("Lucida Grande", Font.BOLD, 15));
		lblBalloon1.setVerticalTextPosition(SwingConstants.BOTTOM);
		lblBalloon1.setHorizontalTextPosition(SwingConstants.CENTER);
		lblBalloon1.setHorizontalAlignment(SwingConstants.CENTER);
		lblBalloon1.setIcon(new ImageIcon(BalloonApp.class.getResource("/labBalloon/images/balloon20.jpg")));
		lblBalloon1.setFocusable(false);
		lblBalloon1.setBorder(new LineBorder(new Color(0, 0, 0)));
		lblBalloon1.setOpaque(true);
		lblBalloon1.setBackground(Color.WHITE);
		pnlBalloons.add(lblBalloon1);
		
		JLabel lblBalloon2 = new JLabel("Balloon 2");
		lblBalloon2.setFont(new Font("Lucida Grande", Font.BOLD, 15));
		lblBalloon2.setHorizontalTextPosition(SwingConstants.CENTER);
		lblBalloon2.setVerticalTextPosition(SwingConstants.BOTTOM);
		lblBalloon2.setHorizontalAlignment(SwingConstants.CENTER);
		lblBalloon2.setIcon(new ImageIcon(BalloonApp.class.getResource("/labBalloon/images/balloon100.jpg")));
		lblBalloon2.setFocusable(false);
		lblBalloon2.setBorder(new LineBorder(new Color(0, 0, 0)));
		lblBalloon2.setBackground(Color.WHITE);
		lblBalloon2.setOpaque(true);
		pnlBalloons.add(lblBalloon2);
		
		btnGenerateRandomBalloons.addActionListener(new ActionListener() 
		{
			public void actionPerformed(ActionEvent e) 
			{
				Random rand = new Random();
				
				Balloon b1 = new Balloon(Size.values()[rand.nextInt(5)], rand.nextBoolean());
				Balloon b2 = new Balloon(Size.values()[rand.nextInt(5)], rand.nextBoolean());
				
				lblBalloon1.setIcon(new ImageIcon(BalloonApp.class.getResource(b1.getImagePath())));
				lblBalloon2.setIcon(new ImageIcon(BalloonApp.class.getResource(b2.getImagePath())));
				
				lblBalloon1.setText(b1.toString());
				lblBalloon2.setText(b2.toString());
				
				if(b1.equals(b2)) lblResults.setText("You got a match!!");
					else lblResults.setText("No match, sorry!!");
			}
		});
	}
}